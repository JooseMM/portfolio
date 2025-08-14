import { LanguageOptions } from "./interfaces/LanguageOptions.enum";

interface LinkInfo {
  visible: { [LanguageOptions.ES]: string; [LanguageOptions.EN]: string };
  link: string;
}

export const LINKS_OPTIONS: LinkInfo[] = [
  {
    visible: {
      [LanguageOptions.EN]: "Home",
      [LanguageOptions.ES]: "Inicio",
    },
    link: "/#navbar",
  },
  {
    visible: {
      [LanguageOptions.EN]: "Projects",
      [LanguageOptions.ES]: "Proyectos",
    },
    link: "/#projects",
  },
  {
    visible: {
      [LanguageOptions.EN]: "Experience",
      [LanguageOptions.ES]: "Experiencia",
    },
    link: "/#experience",
  },
  {
    visible: {
      [LanguageOptions.EN]: "About me",
      [LanguageOptions.ES]: "Sobre mi",
    },
    link: "/#about",
  },
  {
    visible: {
      [LanguageOptions.EN]: "Contact",
      [LanguageOptions.ES]: "Contacto",
    },
    link: "/contact#navbar",
  },
];
