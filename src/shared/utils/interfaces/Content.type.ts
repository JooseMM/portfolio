import type { ContactInfo } from "../context/content.utils";
import { type Experience } from "./Experience.type";
import type { Project } from "./Project.type";
import type { SupportedLanguage } from "./SupportedLanguage.type";

export type ContentOptions = {
  [K in SupportedLanguage]: Content;
};

export interface Content {
  heroParagraph: string;
  education: string[];
  skills: string[];
  experienceList: Experience[];
  projectList: Project[];
  contactInfo: ContactInfo[];
}
