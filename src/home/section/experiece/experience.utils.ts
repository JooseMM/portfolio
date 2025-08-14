import { LanguageOptions } from "../../../shared/utils/interfaces/LanguageOptions.enum";
import Intelsoft from "./images/intelsoft.png";
import Freelance from "./images/freelance.svg"

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
      company: "Intelsoft",
      description:
        "Desarrollo web y móvil con Angular, NestJS, Kotlin y Android. Experiencia en microservicios con Node.js y TypeScript, autenticación JWT, pasarelas de pago, bases de datos SQL/NoSQL, control de versiones con Git y metodologías ágiles con JIRA.",
      year: 2025,
      image: Intelsoft,
    },
    {
      jobTitle: "Desarrollador Full-stack",
      company: "Freelance",
      description:
        "Desarrollo de aplicaciones web con Angular y móviles nativas en Android con Kotlin. Backend con NestJS, Node.js y TypeScript en microservicios, autenticación JWT y pasarelas de pago. Experiencia con TypeORM, MongoDB, Git y pruebas automatizadas.",
      image: Freelance,
      year: 2025,
    },
  ],
  [LanguageOptions.EN]: [
    {
      jobTitle: "Full-stack Developer",
      company: "Intelsoft",
      description:
        "Web and mobile development with Angular, NestJS, Kotlin, and Android. Experience with microservices using Node.js and TypeScript, JWT authentication, payment gateways, SQL/NoSQL databases, version control with Git, and agile methodologies with JIRA.",
      year: 2025,
      image: Intelsoft,
    },
    {
      jobTitle: "Full-stack Developer",
      company: "Freelance",
      description:
        "Development of web applications with Angular and native mobile apps on Android using Kotlin. Backend with NestJS, Node.js, and TypeScript in microservices, JWT authentication, and payment gateways. Experience with TypeORM, MongoDB, Git, and automated testing.",
      year: 2025,
      image: Freelance,
    },
  ],
};
