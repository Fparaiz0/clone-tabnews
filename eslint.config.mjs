import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import js from "@eslint/js";
import jest from "eslint-plugin-jest";
import prettier from "eslint-config-prettier";

export default defineConfig([
  js.configs.recommended,

  ...nextVitals,

  {
    files: ["**/*.{test,spec}.{js,jsx,ts,tsx}"],
    plugins: {
      jest,
    },
    languageOptions: {
      globals: jest.environments.globals.globals,
    },
    rules: {
      ...jest.configs.recommended.rules,
    },
  },

  prettier,

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
