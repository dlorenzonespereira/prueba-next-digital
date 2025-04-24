module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "svelte"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte/svelte"
    }
  ],
  settings: {
    "svelte/typescript": true
  }
};