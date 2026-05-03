"""
Phase 4 skeleton navigation suite.
Requires dev server running on http://localhost:5173
"""
from playwright.sync_api import sync_playwright


BASE = "http://localhost:5173"


def _scroll_y(page) -> float:
    """Return current window.scrollY."""
    return page.evaluate("() => window.scrollY")


def test_home_anchor_services_visible():
    """/#services anchor causes scroll and #services section exists."""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto(f"{BASE}/", wait_until="networkidle")

        # Click the /#services nav link in the header
        page.locator("a[href='/#services']").first.click()
        page.wait_for_timeout(800)

        assert page.locator("#services").count() == 1, "Expected exactly one #services section"
        # Page must have scrolled past the hero
        scroll_y = _scroll_y(page)
        assert scroll_y > 50, f"Expected scroll > 50px after /#services click, got {scroll_y}"

        browser.close()
    print(f"OK: /#services — section exists, page scrolled to y={scroll_y:.0f}px")


def test_home_anchor_about_visible():
    """/#about anchor causes scroll and #about section exists."""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto(f"{BASE}/", wait_until="networkidle")

        page.locator("a[href='/#about']").first.click()
        page.wait_for_timeout(800)

        assert page.locator("#about").count() == 1, "Expected exactly one #about section"
        scroll_y = _scroll_y(page)
        assert scroll_y > 50, f"Expected scroll > 50px after /#about click, got {scroll_y}"

        browser.close()
    print(f"OK: /#about — section exists, page scrolled to y={scroll_y:.0f}px")


def test_home_anchor_contact_visible():
    """/#contact anchor causes scroll and #contact section exists."""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto(f"{BASE}/", wait_until="networkidle")

        page.locator("a[href='/#contact']").first.click()
        page.wait_for_timeout(800)

        assert page.locator("#contact").count() == 1, "Expected exactly one #contact section"
        scroll_y = _scroll_y(page)
        assert scroll_y > 50, f"Expected scroll > 50px after /#contact click, got {scroll_y}"

        browser.close()
    print(f"OK: /#contact — section exists, page scrolled to y={scroll_y:.0f}px")


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

        back_links = page.locator("a[href='/']")
        assert back_links.count() >= 1, "Expected a link back to / on NotFound"

        browser.close()
    print("OK: /no-existe renders NotFound with 404 heading and back link")


def test_public_routes_have_playfair_headings():
    """/, /portfolio, /portfolio-webs each contain h1 or h2 rendered with Playfair Display."""
    routes = ["/", "/portfolio", "/portfolio-webs"]
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        for route in routes:
            page.goto(f"{BASE}{route}", wait_until="networkidle")

            heading = page.locator("h1, h2").first
            assert heading.is_visible(), f"Expected at least one visible h1/h2 on {route}"

            font_family: str = page.evaluate(
                """() => {
                    const el = document.querySelector('h1, h2');
                    if (!el) return '';
                    return window.getComputedStyle(el).fontFamily;
                }"""
            )
            assert "Playfair" in font_family, (
                f"Expected Playfair Display on h1/h2 at {route}, got: {font_family!r}"
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
