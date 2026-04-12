-- ============================================================================
-- SECURITY REMEDIATION MIGRATION
-- Fixes: VULN-01 (RLS Bypass & Race Condition)
-- Date:  2026-04-12
-- ============================================================================

-- ---------------------------------------------------------------------------
-- 1. Drop the existing permissive UPDATE policy on public.photos
--    The old policy allowed users to directly modify re_edit_count and status.
-- ---------------------------------------------------------------------------
DROP POLICY IF EXISTS "Users can update their own photos" ON public.photos;

-- ---------------------------------------------------------------------------
-- 2. Create a restrictive UPDATE policy that only allows updating 'notes'.
--    All other column mutations (status, re_edit_count, edited_url) must go
--    through server-side functions with SECURITY DEFINER.
-- ---------------------------------------------------------------------------
CREATE POLICY "Users can update only notes on their own photos"
  ON public.photos FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (
    auth.uid() = user_id
    -- Ensure critical columns remain unchanged by comparing OLD vs NEW.
    -- PostgreSQL evaluates WITH CHECK against the NEW row.
    -- We use a subquery to compare against the existing row.
  );

-- Since RLS WITH CHECK alone cannot compare OLD vs NEW values,
-- we add a trigger to enforce column immutability from non-DEFINER context.
CREATE OR REPLACE FUNCTION public.enforce_photo_update_restrictions()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  -- Only allow 'notes' and 'updated_at' to change via regular UPDATE.
  -- SECURITY DEFINER functions bypass RLS, so this trigger checks
  -- if the caller is a superuser/definer context. If not, enforce restrictions.
  IF current_setting('role') = 'authenticated' THEN
    IF NEW.re_edit_count IS DISTINCT FROM OLD.re_edit_count THEN
      RAISE EXCEPTION 'Direct modification of re_edit_count is not allowed';
    END IF;
    IF NEW.status IS DISTINCT FROM OLD.status THEN
      RAISE EXCEPTION 'Direct modification of status is not allowed';
    END IF;
    IF NEW.edited_url IS DISTINCT FROM OLD.edited_url THEN
      RAISE EXCEPTION 'Direct modification of edited_url is not allowed';
    END IF;
    IF NEW.original_url IS DISTINCT FROM OLD.original_url THEN
      RAISE EXCEPTION 'Direct modification of original_url is not allowed';
    END IF;
    IF NEW.order_id IS DISTINCT FROM OLD.order_id THEN
      RAISE EXCEPTION 'Direct modification of order_id is not allowed';
    END IF;
    IF NEW.user_id IS DISTINCT FROM OLD.user_id THEN
      RAISE EXCEPTION 'Direct modification of user_id is not allowed';
    END IF;
    IF NEW.is_free_sample IS DISTINCT FROM OLD.is_free_sample THEN
      RAISE EXCEPTION 'Direct modification of is_free_sample is not allowed';
    END IF;
  END IF;

  RETURN NEW;
END;
$$;

CREATE TRIGGER enforce_photo_column_restrictions
  BEFORE UPDATE ON public.photos
  FOR EACH ROW EXECUTE FUNCTION public.enforce_photo_update_restrictions();

-- ---------------------------------------------------------------------------
-- 3. Create SECURITY DEFINER function for re-edit requests.
--    This is the ONLY way to increment re_edit_count and change status.
--    Uses SELECT ... FOR UPDATE to prevent race conditions.
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.request_photo_re_edit(
  p_photo_id UUID,
  p_notes TEXT
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_count   INTEGER;
  v_owner   UUID;
  v_status  TEXT;
BEGIN
  -- Validate input
  IF p_photo_id IS NULL THEN
    RAISE EXCEPTION 'Photo ID is required';
  END IF;

  IF p_notes IS NULL OR trim(p_notes) = '' THEN
    RAISE EXCEPTION 'Notes are required for a re-edit request';
  END IF;

  -- Acquire row lock and fetch current state
  SELECT re_edit_count, user_id, status
    INTO v_count, v_owner, v_status
    FROM public.photos
    WHERE id = p_photo_id
    FOR UPDATE;

  -- Check photo exists
  IF NOT FOUND THEN
    RAISE EXCEPTION 'Photo not found';
  END IF;

  -- Verify ownership
  IF v_owner != auth.uid() THEN
    RAISE EXCEPTION 'Not authorized: you do not own this photo';
  END IF;

  -- Check photo is in a state that allows re-edit requests
  IF v_status NOT IN ('edited', 'delivered') THEN
    RAISE EXCEPTION 'Photo must be in edited or delivered status to request a re-edit';
  END IF;

  -- Check re-edit limit
  IF v_count >= 3 THEN
    RAISE EXCEPTION 'Re-edit limit reached: maximum 3 re-edits per photo';
  END IF;

  -- Atomically update the photo
  UPDATE public.photos
    SET re_edit_count = v_count + 1,
        status = 're_edit_requested',
        updated_at = NOW()
    WHERE id = p_photo_id;

  -- Create re-edit request record
  INSERT INTO public.re_edit_requests (photo_id, user_id, request_notes, status)
    VALUES (p_photo_id, auth.uid(), trim(p_notes), 'pending');
END;
$$;

-- Restrict execute permission to authenticated users only
REVOKE ALL ON FUNCTION public.request_photo_re_edit(UUID, TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.request_photo_re_edit(UUID, TEXT) TO authenticated;
