/**
 * Presupuestos realistas para CI (emulación mobile de Lighthouse).
 * - warn: señal (no falla el job)
 * - error: regresión grave (falla el PR)
 *
 * Error alineado a umbrales “pobres” de Core Web Vitals, algo holgados
 * por máquina compartida / arranque en frío en GitHub Actions.
 */
module.exports = {
  ci: {
    collect: {
      staticDistDir: "./dist",
      url: ["http://localhost/", "http://localhost/about/"],
      numberOfRuns: 2,
      settings: {
        chromeFlags: "--no-sandbox --disable-dev-shm-usage",
      },
    },
    assert: {
      aggregationMethod: "median",
      assertions: {
        // Categoría performance: solo falla si cae a nivel grave.
        "categories:performance": ["error", { minScore: 0.5 }],

        // LCP (ms): bueno ≤2500; pobre ≥4000. Error solo en pobre+.
        "largest-contentful-paint": ["error", { maxNumericValue: 4500 }],

        // CLS: bueno ≤0.1; pobre ≥0.25. Error solo en pobre+.
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.25 }],

        // Señales suaves (no rompen CI).
        "first-contentful-paint": ["warn", { maxNumericValue: 3000 }],
        "total-blocking-time": ["warn", { maxNumericValue: 600 }],
      },
    },
    upload: {
      target: "filesystem",
      outputDir: ".lighthouseci",
    },
  },
};
