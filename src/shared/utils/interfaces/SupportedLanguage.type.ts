import type { LanguageOptions } from "./LanguageOptions.enum";

export type SupportedLanguage =
  (typeof LanguageOptions)[keyof typeof LanguageOptions];
