import js from "@eslint/js";

export default [
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...js.configs.recommended,
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      globals: {
        ...(js.configs.recommended.languageOptions?.globals ?? {}),
        document: "readonly",
        localStorage: "readonly",
        window: "readonly",
      },
    },
  },
];
