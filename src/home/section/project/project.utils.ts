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
        "Created for a nutritionist, with a modern and clean design that conveys professionalism and approachability.",
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
        "Diseño elegante para empresa de envíos con interfaz glassy-bento moderna y formulario de contacto funcional para una experiencia atractiva y fácil de usar.",
      [LanguageOptions.EN]:
        "Elegant shipping company design with a modern glassy-bento interface and a functional contact form for an attractive, user-friendly experience.",
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
        "Genera cuentas de cobro en formato PDF disponibles para descargar, utilizando la librería React PDF para una creación de documentos eficiente y sin complicaciones.",
      [LanguageOptions.EN]:
        "Generates billing invoices in PDF format that are available for download, using the React PDF library for seamless and efficient document creation.",
    },
    isVertical: false,
    websiteLink: "some",
    codeLink: "sd",
    skillList: [SkillOptions.FIGMA, SkillOptions.HTML, SkillOptions.CSS],
  },
];
