"""
Phase 4 skeleton navigation suite.
Requires dev server running on http://localhost:5173
"""
from playwright.sync_api import sync_playwright


BASE = "http://localhost:5173"


def test_home_anchor_services_visible():
    """Clicking /#services scrolls so #services section is in viewport."""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto(f"{BASE}/", wait_until="networkidle")

        page.goto(f"{BASE}/#services", wait_until="networkidle")
        page.wait_for_timeout(600)

        section = page.locator("#services")
        assert section.count() == 1, "Expected exactly one #services section"
        assert section.is_in_viewport(), "#services section should be visible in viewport after anchor navigation"

        browser.close()
    print("OK: /#services section visible in viewport")


def test_home_anchor_about_visible():
    """Clicking /#about scrolls so #about section is in viewport."""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto(f"{BASE}/#about", wait_until="networkidle")
        page.wait_for_timeout(600)

        section = page.locator("#about")
        assert section.count() == 1, "Expected exactly one #about section"
        assert section.is_in_viewport(), "#about section should be visible in viewport after anchor navigation"

        browser.close()
    print("OK: /#about section visible in viewport")


def test_home_anchor_contact_visible():
    """Clicking /#contact scrolls so #contact section is in viewport."""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto(f"{BASE}/#contact", wait_until="networkidle")
        page.wait_for_timeout(600)

        section = page.locator("#contact")
        assert section.count() == 1, "Expected exactly one #contact section"
        assert section.is_in_viewport(), "#contact section should be visible in viewport after anchor navigation"

        browser.close()
    print("OK: /#contact section visible in viewport")


def test_footer_legal_links():
    """Footer legal links navigate to /privacidad, /cookies, /aviso-legal."""
    legal_routes = [
        ("/privacidad", "privacidad"),
        ("/cookies", "cookies"),
        ("/aviso-legal", "aviso-legal"),
    ]
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        for path, slug in legal_routes:
            page.goto(f"{BASE}{path}", wait_until="networkidle")
            assert slug in page.url, f"Expected URL to contain '{slug}', got: {page.url}"
            h1 = page.locator("h1").first
            assert h1.is_visible(), f"Expected visible <h1> on {path}"

        browser.close()
    print("OK: footer legal routes all accessible with visible h1")


def test_not_found_page():
    """Invalid URL renders the NotFound component."""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto(f"{BASE}/no-existe-esta-ruta", wait_until="networkidle")

        h1 = page.locator("h1")
        assert h1.count() >= 1, "Expected at least one <h1> on NotFound page"

        heading_text = h1.first.inner_text()
        assert "404" in heading_text, f"Expected '404' in heading, got: {heading_text!r}"

        back_btn = page.locator("a[href='/']")
        assert back_btn.count() >= 1, "Expected a link back to / on NotFound"

        browser.close()
    print("OK: /no-existe renders NotFound with 404 heading and back link")


def test_public_routes_have_playfair_headings():
    """/, /portfolio, /portfolio-webs each contain at least one h1 or h2 rendered with Playfair Display."""
    routes = ["/", "/portfolio", "/portfolio-webs"]
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        for route in routes:
            page.goto(f"{BASE}{route}", wait_until="networkidle")

            # Find first h1 or h2
            heading = page.locator("h1, h2").first
            assert heading.count() == 1 or heading.is_visible(), (
                f"Expected at least one h1 or h2 on {route}"
            )

            # Check computed font-family contains Playfair
            font_family: str = page.evaluate(
                """() => {
                    const el = document.querySelector('h1, h2');
                    if (!el) return '';
                    return window.getComputedStyle(el).fontFamily;
                }"""
            )
            assert "Playfair" in font_family, (
                f"Expected Playfair Display font on h1/h2 at {route}, got: {font_family!r}"
            )

        browser.close()
    print("OK: /, /portfolio, /portfolio-webs all have h1/h2 with Playfair Display")


if __name__ == "__main__":
    test_home_anchor_services_visible()
    test_home_anchor_about_visible()
    test_home_anchor_contact_visible()
    test_footer_legal_links()
    test_not_found_page()
    test_public_routes_have_playfair_headings()
    print("ALL skeleton_navigation tests passed")
