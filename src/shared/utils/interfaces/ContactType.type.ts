import type { ContactTypeOptions } from "./ContactTypeOptions.enum";

export type ContactType =
  (typeof ContactTypeOptions)[keyof typeof ContactTypeOptions];
