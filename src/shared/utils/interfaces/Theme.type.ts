import type { ThemeOptions } from "./Theme.enum";

export type Theme = (typeof ThemeOptions)[keyof typeof ThemeOptions];
