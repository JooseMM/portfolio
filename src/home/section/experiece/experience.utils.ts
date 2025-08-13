import { LanguageOptions } from "../../../shared/utils/interfaces/LanguageOptions.enum";
import Intelsoft from "./images/intelsoft.png";

export interface ExperienceProps {
  isSecundary: boolean;
}

export interface ExperienceInfo {
  jobTitle: string;
  company: string;
  description: string;
  image: string;
  year: number;
}

interface Experience {
  [LanguageOptions.EN]: ExperienceInfo[];
  [LanguageOptions.ES]: ExperienceInfo[];
}

export const EXPERIENCE_LIST: Experience = {
  [LanguageOptions.ES]: [
    {
      jobTitle: "Desarrollador Full-stack",
      company: "Freelance",
      description: `Desarrollo de aplicaciones web con Angular y móviles nativas en Android con Kotlin. Backend con NestJS, Node.js y TypeScript en microservicios, autenticación JWT y pasarelas de pago. Experiencia con TypeORM, MongoDB, Git y pruebas automatizadas.`,
      image: Intelsoft,
      year: 2025,
    },
    {
      jobTitle: "Desarrollador Full-stack",
      company: "Intelsoft",
      description: `Desarrollo web y móvil con Angular, NestJS, Kotlin y Android. Experiencia en microservicios con Node.js y TypeScript, autenticación JWT, pasarelas de pago, bases de datos SQL/NoSQL, control de versiones con Git y metodologías ágiles con JIRA.`,
      year: 2025,
      image: Intelsoft,
    },
  ],
  [LanguageOptions.EN]: [
    {
      jobTitle: "Full-stack Developer",
      company: "Freelance",
      description: "",
      year: 2025,
      image: Intelsoft,
    },
    {
      jobTitle: "Full-stack Developer",
      company: "Intelsoft",
      description: "",
      year: 2025,
      image: Intelsoft,
    },
  ],
};
