import NutripiaDesktop from "./images/nutripia-mockup.png";
import NutripiaMobile from "./images/nutripia-mobile.png";
import type { Skill } from "../../../shared/utils/interfaces/Skills.type";
import { SkillOptions } from "../../../shared/utils/interfaces/SkillOptions.enum";

export interface ProjectInfo {
  desktopImage: string;
  mobileImage: string;
  title: string;
  isVertical: boolean;
  description: string;
  websiteLink: string;
  codeLink: string;
  skillList: Skill[];
}

export const PROJECT_LIST: ProjectInfo[] = [
  {
    desktopImage: NutripiaDesktop,
    mobileImage: NutripiaMobile,
    title: "Nutripia Lading Page",
    isVertical: false,
    description:
      "Creada para una nutricionista, con un diseño moderno y ordenado que transmite profesionalismo y cercanía.",
    websiteLink: "some",
    codeLink: "sd",
    skillList: [SkillOptions.FIGMA, SkillOptions.HTML, SkillOptions.CSS],
  },
  {
    desktopImage: NutripiaDesktop,
    mobileImage: NutripiaMobile,
    title: "Nutripia Lading Page",
    description:
      "Creada para una nutricionista, con un diseño moderno y ordenado que transmite profesionalismo y cercanía. con un diseño moderno y ordenado que transmite y cercanía.",
    isVertical: true,
    websiteLink: "some",
    codeLink: "sd",
    skillList: [SkillOptions.FIGMA, SkillOptions.HTML, SkillOptions.CSS],
  },
  {
    desktopImage: NutripiaDesktop,
    mobileImage: NutripiaMobile,
    title: "Nutripia Lading Page",
    description:
      "Creada para una nutricionista, con un diseño moderno y ordenado que transmite profesionalismo y cercanía.",
    isVertical: false,
    websiteLink: "some",
    codeLink: "sd",
    skillList: [SkillOptions.FIGMA, SkillOptions.HTML, SkillOptions.CSS],
  },
  {
    desktopImage: NutripiaDesktop,
    mobileImage: NutripiaMobile,
    title: "Nutripia Lading Page",
    description:
      "Creada para una nutricionista, con un diseño moderno y ordenado que transmite profesionalismo y cercanía.",
    websiteLink: "some",
    isVertical: false,
    codeLink: "sd",
    skillList: [SkillOptions.FIGMA, SkillOptions.HTML, SkillOptions.CSS],
  },
  {
    desktopImage: NutripiaDesktop,
    mobileImage: NutripiaMobile,
    title: "Nutripia Lading Page",
    description:
      "Creada para una nutricionista, con un diseño moderno y ordenado que transmite profesionalismo y cercanía.",
    websiteLink: "some",
    isVertical: true,
    codeLink: "sd",
    skillList: [SkillOptions.FIGMA, SkillOptions.HTML, SkillOptions.CSS],
  },
  {
    desktopImage: NutripiaDesktop,
    mobileImage: NutripiaMobile,
    title: "Nutripia Lading Page",
    description:
      "Creada para una nutricionista, con un diseño moderno y ordenado que transmite profesionalismo y cercanía.",
    websiteLink: "some",
    codeLink: "sd",
    isVertical: false,
    skillList: [SkillOptions.FIGMA, SkillOptions.HTML, SkillOptions.CSS],
  },
];
