import { expect, test } from "@playwright/test";

test.describe("Critical portfolio interactions", () => {
  test("theme toggle switches data-theme and checkbox state", async ({ context, page }) => {
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

  test("projects slider activates selected dot and project link", async ({ page }) => {
    await page.goto("/");

    const secondDot = page.locator('.projects-card__dot[data-index="2"]');
    const secondLink = page.locator('.projects-card__link[data-index="2"]');

    await secondDot.click();

    await expect(secondDot).toHaveAttribute("aria-selected", "true");
    await expect(secondLink).toHaveAttribute("aria-hidden", "false");
    await expect(secondLink).toBeVisible();
  });

  test("copy email button writes to clipboard and updates feedback label", async ({ page }) => {
    await page.addInitScript(() => {
      const clipboard = {
        writeText: async (value: string) => {
          (window as any).__copiedText = value;
        },
      };

      Object.defineProperty(navigator, "clipboard", {
        value: clipboard,
        configurable: true,
      });
    });

    await page.goto("/");

    const copyBtn = page.locator("#copy-btn");
    const label = page.locator("#label-copy");

    const expectedEmail = await copyBtn.getAttribute("data-email");

    await copyBtn.click();

    await expect(label).toHaveText("Copiado");

    const copiedText = await page.evaluate(() => (window as any).__copiedText);
    expect(copiedText).toBe(expectedEmail);
  });
});
