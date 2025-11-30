import { LanguageOptions } from "./LanguageOptions.enum";

export type SupportedLanguage =
  | typeof LanguageOptions.EN
  | typeof LanguageOptions.ES;
