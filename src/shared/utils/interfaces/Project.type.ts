import type { Skill } from "./Skills.type";

export interface Project {
  name: string;
  type: string;
  description: string;
  mobileImage: string;
  techStack: Skill[];
  isVertical: boolean;
  desktopImage: string;
  websiteLink: string;
  codeLink: string;
}
