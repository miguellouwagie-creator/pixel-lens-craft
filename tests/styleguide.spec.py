from playwright.sync_api import sync_playwright


def test_styleguide_dark_default():
    errors = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        page.on("pageerror", lambda err: errors.append(str(err)))

        page.goto("http://localhost:5173/styleguide")
        page.wait_for_load_state("networkidle")

        # Default must be dark
        html_class = page.locator("html").get_attribute("class") or ""
        assert "dark" in html_class, f"Expected dark default, got: {html_class!r}"

        # Toggle to light
        page.click("button:has-text('Light')")
        page.wait_for_timeout(300)

        html_class_after = page.locator("html").get_attribute("class") or ""
        assert "dark" not in html_class_after, (
            f"Expected light after toggle, got: {html_class_after!r}"
        )

        # No console errors
        assert not errors, f"Console errors detected: {errors}"

        browser.close()

    print("OK: dark default, light toggle, no console errors")


if __name__ == "__main__":
    test_styleguide_dark_default()
