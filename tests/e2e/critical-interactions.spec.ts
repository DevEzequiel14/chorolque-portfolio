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

  test("presentation employer name opens OneInfo Consulting in a new tab", async ({
    page,
  }) => {
    await page.goto("/");

    const employer = page.locator(".presentation-card__employer");

    await expect(employer).toHaveText("OneInfoConsulting");
    await expect(employer).toHaveAttribute(
      "href",
      "https://oneinfoconsulting.com/",
    );
    await expect(employer).toHaveAttribute("target", "_blank");
    await expect(employer).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("about text slider advances on consecutive swipes", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/about");

    const viewport = page.locator(".text-slider__viewport");
    const dots = page.locator(".text-slider__dot");

    await expect(viewport).toBeVisible();
    await expect(dots.nth(0)).toHaveAttribute("aria-current", "true");

    async function swipe(direction: "left" | "right") {
      await viewport.evaluate((el, dir) => {
        const rect = el.getBoundingClientRect();
        const y = rect.top + rect.height / 2;
        const fromX =
          dir === "left"
            ? rect.left + rect.width * 0.8
            : rect.left + rect.width * 0.2;
        const toX =
          dir === "left"
            ? rect.left + rect.width * 0.2
            : rect.left + rect.width * 0.8;

        const fire = (type: string, x: number) => {
          const touch = new Touch({
            identifier: 1,
            target: el,
            clientX: x,
            clientY: y,
          });
          el.dispatchEvent(
            new TouchEvent(type, {
              bubbles: true,
              cancelable: true,
              composed: true,
              touches: type === "touchend" ? [] : [touch],
              targetTouches: type === "touchend" ? [] : [touch],
              changedTouches: [touch],
            }),
          );
        };

        fire("touchstart", fromX);
        fire("touchmove", (fromX + toX) / 2);
        fire("touchmove", toX);
        fire("touchend", toX);
      }, direction);
    }

    await swipe("left");
    await expect(dots.nth(1)).toHaveAttribute("aria-current", "true");

    await swipe("left");
    await expect(dots.nth(2)).toHaveAttribute("aria-current", "true");

    await swipe("right");
    await expect(dots.nth(1)).toHaveAttribute("aria-current", "true");
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
