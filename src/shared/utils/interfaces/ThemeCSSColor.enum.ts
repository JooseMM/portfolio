import type { ThemeCSSColorOptions } from "./ThemeCSSColorOptions.enum";

export type ThemeCSSColor=
  (typeof ThemeCSSColorOptions)[keyof typeof ThemeCSSColorOptions];
