import { expect, test } from "@playwright/test";

test.describe("Critical portfolio interactions", () => {
  test("theme toggle switches data-theme and checkbox state", async ({
    context,
    page,
  }) => {
    await context.addInitScript(() => {
      localStorage.setItem("theme", "light");
    });

    await page.goto("/");

    const html = page.locator("html");
    const toggle = page.locator("#darkmode-toggle");
    const toggleLabel = page.locator('label[for="darkmode-toggle"]');

    await expect(html).toHaveAttribute("data-theme", "light");
    await expect(toggle).not.toBeChecked();

    await toggleLabel.click();

    await expect(html).toHaveAttribute("data-theme", "dark");
    await expect(toggle).toBeChecked();
  });

  test("featured project tiles link to their work pages", async ({ page }) => {
    await page.goto("/");

    const valor = page.locator('a[href="/work/valor-ar"]');
    const quincho = page.locator('a[href="/work/quincho-el-tata"]');

    await expect(valor).toBeVisible();
    await expect(quincho).toBeVisible();
    await expect(valor).toHaveAttribute(
      "aria-label",
      "Ver detalle del proyecto Valor Ar",
    );
    await expect(quincho).toHaveAttribute(
      "aria-label",
      "Ver detalle del proyecto Quincho el Tata",
    );
  });

  test("contact card links to the discovery form in a new tab", async ({
    page,
  }) => {
    await page.goto("/");

    const contactLink = page.locator(".contact-card");

    await expect(contactLink).toHaveAttribute(
      "href",
      "https://client-discovery-form.vercel.app/",
    );
    await expect(contactLink).toHaveAttribute("target", "_blank");
    await expect(contactLink).toContainText("¿Tenés un proyecto?");
  });
});
