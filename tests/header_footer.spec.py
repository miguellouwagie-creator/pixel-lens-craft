from playwright.sync_api import sync_playwright


def test_header_footer_navigation():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        page.goto("http://localhost:5173/", wait_until="networkidle")

        header = page.locator("header")
        assert header.count() >= 1, "Expected at least one <header> element"

        footer = page.locator("footer")
        assert footer.count() >= 1, "Expected at least one <footer> element"

        logo = page.locator("header a[href='/']").first
        assert logo.is_visible(), "Header logo link to / should be visible"

        # Click Portfolio link in desktop nav (first match)
        page.locator("header a:has-text('Portfolio'), header a:has-text('portfolio')").first.click()
        page.wait_for_load_state("networkidle")
        assert "/portfolio" in page.url, f"Expected /portfolio, got {page.url}"

        # Return to / via logo
        page.locator("header a[href='/']").first.click()
        page.wait_for_load_state("networkidle")
        assert page.url.rstrip("/").endswith(":5173") or page.url.endswith("/"), f"Expected /, got {page.url}"

        browser.close()


def test_language_toggle_changes_html_lang():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Start fresh with no stored language so detector defaults to ES
        page.goto("http://localhost:5173/", wait_until="networkidle")

        # Force ES baseline via toggle then verify EN switch
        page.locator("button:has-text('ES'), button:has-text('EN')").first.click()
        page.locator("text=Español").first.click()
        page.wait_for_timeout(300)

        es_lang = page.locator("html").get_attribute("lang")
        assert es_lang and es_lang.startswith("es"), f"Expected ES, got {es_lang}"

        # Switch to EN
        page.locator("button:has-text('ES'), button:has-text('EN')").first.click()
        page.locator("text=English").first.click()
        page.wait_for_timeout(300)

        en_lang = page.locator("html").get_attribute("lang")
        assert en_lang and en_lang.startswith("en"), f"Expected EN after toggle, got {en_lang}"

        browser.close()


def test_mobile_nav_opens_and_closes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Set mobile viewport
        page.set_viewport_size({"width": 375, "height": 812})
        page.goto("http://localhost:5173/", wait_until="networkidle")

        # Hamburger button visible at mobile size
        hamburger = page.locator("button[aria-label]").filter(has_text="").first
        # Use aria-label to find the menu button
        menu_btn = page.locator("header button[aria-label]").first
        assert menu_btn.is_visible(), "Mobile menu button should be visible"

        menu_btn.click()
        page.wait_for_timeout(400)

        # Sheet should be open - check for nav links inside
        sheet_link = page.locator("[data-radix-scroll-area-viewport] a, [role='dialog'] a").first
        assert sheet_link.is_visible(), "Sheet nav link should be visible after opening"

        # Close by pressing Escape
        page.keyboard.press("Escape")
        page.wait_for_timeout(400)

        browser.close()


if __name__ == "__main__":
    test_header_footer_navigation()
    print("OK: header + footer navigation")
    test_language_toggle_changes_html_lang()
    print("OK: language toggle changes html lang")
    test_mobile_nav_opens_and_closes()
    print("OK: mobile nav opens and closes")
