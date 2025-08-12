import type { Skill } from "../../../shared/utils/interfaces/Skills.type";
import { SkillOptions } from "../../../shared/utils/interfaces/SkillOptions.enum";
import NutripiaDesktop from "./images/nutripia-mockup.png";
import NutripiaMobile from "./images/nutripia-mobile.png";
import CriszulDesktop from "./images/criszul-desktop.png";
import CriszulMobile from "./images/criszul-mobile.png";
import CheckGeneratorDesktop from "./images/pdf-generator-pc.png";
import CheckGeneratorMobile from "./images/pdf-generator-phone.png";
import { LanguageOptions } from "../../../shared/utils/interfaces/LanguageOptions.enum";

export interface ProjectInfo {
  desktopImage: string;
  mobileImage: string;
  title: string;
  isVertical: boolean;
  description: { [LanguageOptions.ES]: string; [LanguageOptions.EN]: string };
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
    description: {
      [LanguageOptions.ES]:
        "Creada para una nutricionista, con un diseño moderno y ordenado que transmite profesionalismo y cercanía.",
      [LanguageOptions.EN]:
        "Creada para una nutricionista, con un diseño moderno y ordenado que transmite profesionalismo y cercanía.",
    },
    websiteLink: "https://nutripia.netlify.app/",
    codeLink: "",
    skillList: [SkillOptions.FIGMA, SkillOptions.HTML, SkillOptions.CSS],
  },
  {
    desktopImage: CriszulDesktop,
    mobileImage: CriszulMobile,
    title: "Criszul Lading Page",
    description: {
      [LanguageOptions.ES]:
        "Diseño elegante para empresa de envíos, con UI glassy-bento y formulario de contacto.",
      [LanguageOptions.EN]:
        "Diseño elegante para empresa de envíos, con UI glassy-bento y formulario de contacto.",
    },
    isVertical: true,
    websiteLink: "https://criszul.netlify.app/",
    codeLink: "",
    skillList: [SkillOptions.FIGMA, SkillOptions.HTML, SkillOptions.CSS],
  },
  {
    desktopImage: CheckGeneratorDesktop,
    mobileImage: CheckGeneratorMobile,
    title: "Invoice App",
    description: {
      [LanguageOptions.ES]:
        "Genera cuentas de cobro en formato PDF disponibles para descargar utilizando la libreria.",
      [LanguageOptions.EN]:
        "Genera cuentas de cobro en formato PDF disponibles para descargar utilizando la libreria.",
    },
    isVertical: false,
    websiteLink: "some",
    codeLink: "sd",
    skillList: [SkillOptions.FIGMA, SkillOptions.HTML, SkillOptions.CSS],
  },
];
