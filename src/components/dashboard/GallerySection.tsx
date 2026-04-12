import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { RotateCcw, Download, Image as ImageIcon, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

interface Photo {
  id: string;
  original_url: string;
  edited_url: string | null;
  status: string;
  re_edit_count: number;
  is_free_sample: boolean;
  notes: string | null;
  created_at: string;
}

/** Signed URL cache: maps photo ID → { original, edited? } signed URLs */
interface SignedUrls {
  original: string;
  edited?: string;
}

const SIGNED_URL_TTL = 3600; // 1 hour

const GallerySection = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [reEditNotes, setReEditNotes] = useState('');
  const [showReEditDialog, setShowReEditDialog] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [photoUrls, setPhotoUrls] = useState<Record<string, SignedUrls>>({});
  const [urlsLoading, setUrlsLoading] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  /**
   * Generate signed URLs for a list of photos.
   * Uses batch createSignedUrls where possible for efficiency.
   */
  const fetchSignedUrls = useCallback(async (photoList: Photo[]) => {
    if (photoList.length === 0) return;
    setUrlsLoading(true);

    try {
      const urlMap: Record<string, SignedUrls> = {};

      // Collect all storage paths that need signed URLs
      const originalPaths = photoList.map((p) => p.original_url);
      const editedEntries = photoList
        .filter((p) => p.edited_url)
        .map((p) => ({ id: p.id, path: p.edited_url! }));

      // Batch fetch signed URLs for originals
      const { data: originalUrls, error: origErr } = await supabase.storage
        .from('original-photos')
        .createSignedUrls(originalPaths, SIGNED_URL_TTL);

      if (origErr) {
        console.error('Error creating signed URLs for originals:', origErr);
      }

      // Map original signed URLs by matching the path
      if (originalUrls) {
        photoList.forEach((photo, index) => {
          const signedEntry = originalUrls[index];
          if (signedEntry && signedEntry.signedUrl) {
            urlMap[photo.id] = { original: signedEntry.signedUrl };
          }
        });
      }

      // Fetch signed URLs for edited photos (from the edited-photos bucket)
      if (editedEntries.length > 0) {
        const editedPaths = editedEntries.map((e) => e.path);
        const { data: editedUrls, error: editErr } = await supabase.storage
          .from('edited-photos')
          .createSignedUrls(editedPaths, SIGNED_URL_TTL);

        if (editErr) {
          console.error('Error creating signed URLs for edited:', editErr);
        }

        if (editedUrls) {
          editedEntries.forEach((entry, index) => {
            const signedEntry = editedUrls[index];
            if (signedEntry && signedEntry.signedUrl) {
              if (urlMap[entry.id]) {
                urlMap[entry.id].edited = signedEntry.signedUrl;
              }
            }
          });
        }
      }

      setPhotoUrls(urlMap);
    } catch (error) {
      console.error('Failed to fetch signed URLs:', error);
    } finally {
      setUrlsLoading(false);
    }
  }, []);

  const fetchPhotos = useCallback(async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('photos')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      const photoData = data || [];
      setPhotos(photoData);

      // After fetching photos, generate signed URLs for rendering
      await fetchSignedUrls(photoData);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'No se pudieron cargar las fotos',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  }, [user, toast, fetchSignedUrls]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  /**
   * VULN-01 FIX: Use server-side SECURITY DEFINER RPC instead of
   * direct INSERT + UPDATE calls. The function atomically:
   * - Verifies ownership
   * - Checks re_edit_count < 3 with row-level lock
   * - Increments re_edit_count
   * - Sets status to 're_edit_requested'
   * - Creates a re_edit_requests record
   */
  const handleRequestReEdit = async () => {
    if (!selectedPhoto || !reEditNotes.trim()) return;

    // Client-side guard (server enforces this too)
    if (selectedPhoto.re_edit_count >= 3) {
      toast({
        title: 'Límite alcanzado',
        description: 'Has alcanzado el máximo de 3 re-ediciones para esta foto',
        variant: 'destructive'
      });
      return;
    }

    setSubmitting(true);

    try {
      const { error } = await supabase.rpc('request_photo_re_edit', {
        p_photo_id: selectedPhoto.id,
        p_notes: reEditNotes,
      });

      if (error) throw error;

      toast({
        title: '¡Solicitud enviada!',
        description: 'Tu solicitud de re-edición ha sido registrada'
      });

      setShowReEditDialog(false);
      setReEditNotes('');
      fetchPhotos();
    } catch (error: any) {
      // Parse server-side exception messages for user-friendly display
      let message = error.message || 'Error al enviar la solicitud';
      if (message.includes('Re-edit limit reached')) {
        message = 'Has alcanzado el máximo de 3 re-ediciones para esta foto';
      } else if (message.includes('Not authorized')) {
        message = 'No tienes permiso para editar esta foto';
      }

      toast({
        title: 'Error',
        description: message,
        variant: 'destructive'
      });
    } finally {
      setSubmitting(false);
    }
  };

  /**
   * Download a photo using its signed URL.
   * Creates a temporary link to trigger browser download.
   */
  const handleDownload = async (photo: Photo) => {
    const urls = photoUrls[photo.id];
    const downloadUrl = urls?.edited || urls?.original;

    if (!downloadUrl) {
      toast({
        title: 'Error',
        description: 'No se pudo obtener la URL de descarga',
        variant: 'destructive'
      });
      return;
    }

    window.open(downloadUrl, '_blank');
  };

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string; variant: any }> = {
      uploaded: { label: 'Pendiente', variant: 'secondary' },
      free_sample: { label: 'Muestra', variant: 'default' },
      in_editing: { label: 'Editando', variant: 'default' },
      edited: { label: 'Editada', variant: 'default' },
      delivered: { label: 'Entregada', variant: 'default' },
      re_edit_requested: { label: 'Re-edición solicitada', variant: 'secondary' }
    };

    const config = statusMap[status] || { label: status, variant: 'secondary' };
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  if (loading) {
    return <div className="text-center py-8">Cargando galería...</div>;
  }

  if (photos.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Galería Vacía</CardTitle>
          <CardDescription>
            Aún no has subido ninguna foto. Ve a la sección "Subir Fotos" para comenzar.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Tu Galería de Fotos</CardTitle>
          <CardDescription>
            Visualiza el antes y después de tus fotos editadas
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => {
          const urls = photoUrls[photo.id];

          return (
            <Card key={photo.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  {getStatusBadge(photo.status)}
                  <span className="text-xs text-muted-foreground">
                    Re-ediciones: {photo.re_edit_count}/3
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Original Photo */}
                <div>
                  <p className="text-sm font-medium mb-2">Original</p>
                  <div className="aspect-square bg-secondary rounded-lg overflow-hidden flex items-center justify-center">
                    {urlsLoading || !urls?.original ? (
                      <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    ) : (
                      <img
                        src={urls.original}
                        alt="Original"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                {/* Edited Photo */}
                {photo.edited_url && (
                  <div>
                    <p className="text-sm font-medium mb-2">Editada</p>
                    <div className="aspect-square bg-secondary rounded-lg overflow-hidden flex items-center justify-center">
                      {urlsLoading || !urls?.edited ? (
                        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                      ) : (
                        <img
                          src={urls.edited}
                          alt="Editada"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                )}

                {/* Actions */}
                {photo.edited_url && photo.status === 'delivered' && (
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => {
                        setSelectedPhoto(photo);
                        setShowReEditDialog(true);
                      }}
                      disabled={photo.re_edit_count >= 3}
                    >
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Solicitar Re-edición
                    </Button>
                    <Button
                      variant="cta"
                      size="sm"
                      className="w-full"
                      onClick={() => handleDownload(photo)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Descargar
                    </Button>
                  </div>
                )}

                {photo.notes && (
                  <div className="text-xs text-muted-foreground bg-secondary p-2 rounded">
                    <p className="font-medium">Notas:</p>
                    <p>{photo.notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Re-edit Dialog */}
      <Dialog open={showReEditDialog} onOpenChange={setShowReEditDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Solicitar Re-edición</DialogTitle>
            <DialogDescription>
              Describe los cambios que deseas en esta foto. Tienes{' '}
              {selectedPhoto ? 3 - selectedPhoto.re_edit_count : 0} re-ediciones disponibles.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Textarea
              placeholder="Ejemplo: Por favor, ajusta más el brillo y reduce la saturación..."
              value={reEditNotes}
              onChange={(e) => setReEditNotes(e.target.value)}
              rows={4}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowReEditDialog(false)}>
              Cancelar
            </Button>
            <Button
              variant="cta"
              onClick={handleRequestReEdit}
              disabled={!reEditNotes.trim() || submitting}
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                'Enviar Solicitud'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GallerySection;
