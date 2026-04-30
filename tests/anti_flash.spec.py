from playwright.sync_api import sync_playwright


def test_dark_class_present_at_first_paint():
    """
    Verifies that <html> has class="dark" BEFORE React hydration.
    Critical test: if the anti-flash script is missing, this assertion fails because
    during a brief window <html> appears without the .dark class.
    """
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Capture html class at DOMContentLoaded — React has not finished hydrating yet
        # but the inline script has already run
        page.goto("http://localhost:5173/styleguide", wait_until="domcontentloaded")

        html_class = page.locator("html").get_attribute("class") or ""
        assert "dark" in html_class, (
            f"Expected 'dark' class on <html> at DOMContentLoaded "
            f"(anti-flash script should run synchronously), got: '{html_class}'"
        )

        # Wait for React hydration and verify .dark persists (next-themes does not remove it)
        page.wait_for_load_state("networkidle")
        html_class_after = page.locator("html").get_attribute("class") or ""
        assert "dark" in html_class_after, (
            f"Expected 'dark' class to persist after React hydration, "
            f"got: '{html_class_after}'"
        )

        browser.close()

    print("OK: anti-flash script works")


if __name__ == "__main__":
    test_dark_class_present_at_first_paint()
