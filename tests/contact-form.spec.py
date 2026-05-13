"""
Test Playwright para HomeContact (Subfase 5.4).

Cubre:
- Validación cliente con campos vacíos (debe mostrar errores).
- Envío válido completo abre wa.me con número correcto.
- Envío válido sin teléfono (campo opcional) pasa validación.
- Mensaje menor a 20 caracteres dispara validación específica.

Runner:
python scripts/with_server.py --server "npm run dev" --port 5173 -- python tests/contact-form.spec.py
"""

from playwright.sync_api import sync_playwright

BASE = "http://localhost:5173"


def test_invalid_empty_submit(page):
    page.goto(f"{BASE}/")
    page.wait_for_load_state("networkidle")
    # Scroll al bloque contact
    page.evaluate("document.getElementById('contact')?.scrollIntoView()")
    page.wait_for_timeout(500)

    submit = page.get_by_role("button", name="Enviar mensaje")
    submit.scroll_into_view_if_needed()
    submit.click()

    # Esperamos al menos 4 mensajes de validación (name, email, service, terms; message también)
    page.wait_for_timeout(300)
    errors = page.locator('[role="alert"], p.text-destructive, [data-testid="form-message"]')
    count = errors.count()
    assert count >= 4, f"Expected >=4 validation errors, got {count}"
    print(f"  -> {count} validation errors visible")


def test_valid_full_submit_opens_wa_me(page, context):
    page.goto(f"{BASE}/")
    page.wait_for_load_state("networkidle")
    page.evaluate("document.getElementById('contact')?.scrollIntoView()")
    page.wait_for_timeout(500)

    page.get_by_label("Nombre", exact=False).fill("Test User")
    page.get_by_label("Email", exact=False).first.fill("test@example.com")
    page.get_by_label("Teléfono", exact=False).fill("+34600000000")

    # Service select
    page.get_by_role("combobox").click()
    page.get_by_role("option", name="Diseño web").click()

    page.get_by_label("Cuéntanos", exact=False).fill(
        "Este es un mensaje de prueba con más de veinte caracteres."
    )
    page.get_by_role("checkbox").check()

    # Capturar window.open
    with context.expect_page() as new_page_info:
        page.get_by_role("button", name="Enviar mensaje").click()
    new_page = new_page_info.value
    new_page.wait_for_load_state("domcontentloaded", timeout=5000)
    url = new_page.url
    print(f"  -> opened URL: {url[:80]}...")
    # wa.me redirects to api.whatsapp.com/send in browser context
    wa_ok = "wa.me/34667326300" in url or "api.whatsapp.com/send" in url
    assert wa_ok, f"Expected WhatsApp URL with phone 34667326300, got {url}"
    assert "34667326300" in url, f"Expected phone number in URL, got {url}"


def test_valid_without_phone(page, context):
    page.goto(f"{BASE}/")
    page.wait_for_load_state("networkidle")
    page.evaluate("document.getElementById('contact')?.scrollIntoView()")
    page.wait_for_timeout(500)

    page.get_by_label("Nombre", exact=False).fill("Test User")
    page.get_by_label("Email", exact=False).first.fill("test@example.com")
    # phone omitido a propósito

    page.get_by_role("combobox").click()
    page.get_by_role("option", name="Fotografía").click()

    page.get_by_label("Cuéntanos", exact=False).fill(
        "Mensaje de prueba con más de veinte caracteres aquí."
    )
    page.get_by_role("checkbox").check()

    with context.expect_page() as new_page_info:
        page.get_by_role("button", name="Enviar mensaje").click()
    new_page = new_page_info.value
    new_page.wait_for_load_state("domcontentloaded", timeout=5000)
    url = new_page.url
    wa_ok = "wa.me/34667326300" in url or "api.whatsapp.com/send" in url
    assert wa_ok, f"Expected WhatsApp URL with phone 34667326300, got {url}"


def test_message_min_length_validation(page):
    page.goto(f"{BASE}/")
    page.wait_for_load_state("networkidle")
    page.evaluate("document.getElementById('contact')?.scrollIntoView()")
    page.wait_for_timeout(500)

    page.get_by_label("Nombre", exact=False).fill("Test User")
    page.get_by_label("Email", exact=False).first.fill("test@example.com")
    page.get_by_role("combobox").click()
    page.get_by_role("option", name="Diseño web").click()
    page.get_by_label("Cuéntanos", exact=False).fill("Corto")  # 5 chars
    page.get_by_role("checkbox").check()
    page.get_by_role("button", name="Enviar mensaje").click()
    page.wait_for_timeout(800)
    # Espera mensaje de validación específico
    has_error = page.locator("text=/al menos 20 caracteres/i").count() >= 1
    assert has_error, "Expected message min length validation error"


def run():
    passed = 0
    failed = 0
    # Force es-ES locale so i18next-browser-languagedetector returns 'es'
    CTX_OPTS = {"locale": "es-ES"}
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        try:
            # Test 1
            try:
                context = browser.new_context(**CTX_OPTS)
                page = context.new_page()
                test_invalid_empty_submit(page)
                print("PASS: test_invalid_empty_submit")
                passed += 1
                context.close()
            except Exception as e:
                print(f"FAIL: test_invalid_empty_submit: {e}")
                failed += 1

            # Test 2
            try:
                context = browser.new_context(**CTX_OPTS)
                page = context.new_page()
                test_valid_full_submit_opens_wa_me(page, context)
                print("PASS: test_valid_full_submit_opens_wa_me")
                passed += 1
                context.close()
            except Exception as e:
                print(f"FAIL: test_valid_full_submit_opens_wa_me: {e}")
                failed += 1

            # Test 3
            try:
                context = browser.new_context(**CTX_OPTS)
                page = context.new_page()
                test_valid_without_phone(page, context)
                print("PASS: test_valid_without_phone")
                passed += 1
                context.close()
            except Exception as e:
                print(f"FAIL: test_valid_without_phone: {e}")
                failed += 1

            # Test 4
            try:
                context = browser.new_context(**CTX_OPTS)
                page = context.new_page()
                test_message_min_length_validation(page)
                print("PASS: test_message_min_length_validation")
                passed += 1
                context.close()
            except Exception as e:
                print(f"FAIL: test_message_min_length_validation: {e}")
                failed += 1
        finally:
            browser.close()
    print(f"\nResult: {passed} passed, {failed} failed")
    if failed > 0:
        exit(1)


if __name__ == "__main__":
    run()
