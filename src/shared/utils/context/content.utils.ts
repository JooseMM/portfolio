import type { ContentOptions } from "../interfaces/Content.type";
import { SkillOptions } from "../interfaces/SkillOptions.enum";
import { LanguageOptions } from "../interfaces/LanguageOptions.enum";
import NutripiaDesktop from "./images/nutripia-mockup.png";
import NutripiaMobile from "./images/nutripia-mobile.png";
import CriszulDesktop from "./images/criszul-desktop.png";
import CriszulMobile from "./images/criszul-mobile.png";
import CheckGeneratorDesktop from "./images/pdf-generator-pc.png";
import CheckGeneratorMobile from "./images/pdf-generator-phone.png";

import Intelsoft from "./images/intelsoft.png";
import Freelance from "./images/freelance.svg";
import Totalpack from "./images/totalpack.png";

import { EmailIcon } from "../../../shared/socials/email.icon";
import { GithubIcon } from "../../../shared/socials/github.icon";
import { LinkedinIcon } from "../../../shared/socials/linkedin.icon";
import type { IconProps } from "../../../shared/socials/props.type";
import { WhatsappIcon } from "../../../shared/socials/whatsapp.icon";

export interface ContactInfo {
  name: string;
  link: string;
  visible: string;
  Icon: (props: IconProps) => React.JSX.Element;
}

export const CONTACT_LIST: ContactInfo[] = [
  {
    name: "Email",
    link: "mailto:jamm.webdev@gmail.com",
    visible: "jamm.webdev@gmail.com",
    Icon: EmailIcon,
  },
  {
    name: "Whatsapp",
    link: "https://wa.me/56932845558?text=Hola%21%20Vengo%20de%20tu%20portafolio,%20me%20gustaria%20saber%20mas%20sobre%20ti.",
    visible: "(+56) 9 3284 5558",
    Icon: WhatsappIcon,
  },
  {
    name: "Github",
    link: "https://github.com/JooseMM",
    visible: "github.com/JooseMM",
    Icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jamm-dev",
    visible: "linkedin.com/in/jamm-dev",
    Icon: LinkedinIcon,
  },
];
export const CONTENT: ContentOptions = {
  [LanguageOptions.ES]: {
    heroParagraph:
      "Hola! mi nombre es Jose Moreno, un desarrollador web autodidacta, con bases fuertes en diseño de UI UX.",
    education: [
      "Curso NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
      "Curso GIT - Desafío Latam",
      "Curso Master Web Api ASP NET Core 9",
    ],
    experienceList: [
      {
        companyName: "Freelance",
        role: "Desarrollador Full Stack",
        description:
          "Desarrollo de aplicaciones web con Angular. Backend con NestJS, Node.js y TypeScript, autenticación JWT y pasarelas de pago. Experiencia con TypeORM, MongoDB, Git y pruebas automatizadas.",
        from: "2025",
        image: Freelance,
      },
      {
        companyName: "Intelsoft",
        role: "Desarrollador Full Stack (Practica)",
        description:
          "Desarrollo web y móvil con Angular, NestJS, Kotlin y Android. Experiencia en microservicios con Node.js y TypeScript, autenticación JWT, pasarelas de pago, bases de datos SQL/NoSQL, control de versiones con Git y metodologías ágiles con JIRA.",
        from: "2025",
        image: Intelsoft,
      },
      {
        companyName: "Totalpack",
        role: "Desarrollador Software",
        description:
          "Desarrollo de software para gestión de turnos multicliente y multiplataforma implementando arquitectura hexagonal y patrones BFF (Backend For Frontend). Soluciones full-stack construidas con .NET, Express.js y Angular (v12–20), integradas con bases de datos SQL Server y MySQL.",
        from: "2025",
        until: "Actual",
        image: Totalpack,
      },
    ],
    skills: [
      "Angular",
      "Typescript",
      "Patrones de Diseño",
      "GIT",
      "HTML",
      "CSS",
      "Diseño de UX UI",
      "SQL",
      "MongoDB",
      "Express.js",
      "Kotlin",
      "NestJS",
      "TailwindCSS",
      "Linux",
      "Inglés Avanzado",
    ],
    projectList: [
      {
        name: "Nutripia",
        type: "Landing Page",
        description:
          "Creada para una nutricionista, con un diseño moderno y ordenado que transmite profesionalismo y cercanía.",
        techStack: [
          SkillOptions.ANGULAR,
          SkillOptions.TAILWINDCSS,
          SkillOptions.SQL,
          SkillOptions.FIGMA,
        ],
        isVertical: false,
        desktopImage: NutripiaDesktop,
        mobileImage: NutripiaMobile,
        websiteLink: "https://nutripia.netlify.app/",
        codeLink: "",
      },
      {
        name: "Criszul",
        type: "Landing Page",
        description:
          "Diseño elegante para empresa de envíos con interfaz glassy-bento moderna y formulario de contacto funcional para una experiencia atractiva y fácil de usar.",
        techStack: [
          SkillOptions.FIGMA,
          SkillOptions.HTML,
          SkillOptions.CSS,
          SkillOptions.EXPRESS,
        ],
        isVertical: true,
        websiteLink: "https://criszul.netlify.app/",
        codeLink: "",
        desktopImage: CriszulDesktop,
        mobileImage: CriszulMobile,
      },
      {
        name: "Invoce",
        type: "App",
        description:
          "Genera cuentas de cobro en formato PDF disponibles para descargar, utilizando la librería React PDF para una creación de documentos eficiente y sin complicaciones.",
        techStack: [SkillOptions.FIGMA, SkillOptions.HTML, SkillOptions.CSS],
        desktopImage: CheckGeneratorDesktop,
        mobileImage: CheckGeneratorMobile,
        isVertical: false,
        websiteLink: "https://cuentas-pdf.netlify.app",
        codeLink: "https://github.com/JooseMM/cuentas-PDF",
      },
    ],
    contactInfo: [...CONTACT_LIST],
  },
  [LanguageOptions.EN]: {
    heroParagraph:
      "Hello! My name is Jose Moreno, a self-taught web developer with strong foundations in UI/UX design.",
    education: [
      "Course NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
      "Course GIT - Desafío Latam",
      "Course Master Web Api ASP NET Core 9",
    ],
    experienceList: [
      {
        companyName: "Freelance",
        role: "Full-stack Developer",
        description:
          "Development of web applications with Angular and native mobile apps on Android using Kotlin. Backend with NestJS, Node.js, and TypeScript in microservices, JWT authentication, and payment gateways. Experience with TypeORM, MongoDB, Git, and automated testing.",
        from: "2025",
        image: Freelance,
      },
      {
        companyName: "Intelsoft",
        role: "Full-stack Developer (Internship)",
        description:
          "Web and mobile development with Angular, NestJS, Kotlin, and Android. Experience with microservices using Node.js and TypeScript, JWT authentication, payment gateways, SQL/NoSQL databases, version control with Git, and agile methodologies with JIRA.",
        from: "2025",
        image: Intelsoft,
      },
      {
        companyName: "Totalpack",
        role: "Software Developer",
        description:
          "Software development for multi-client and multi-platform queue management implementing hexagonal architecture and BFF (Backend For Frontend) patterns. Full-stack solutions built with .NET, Express.js, and Angular (v12–20), integrated with SQL Server and MySQL databases.",
        from: "2025",
        until: "Currently",
        image: Totalpack,
      },
    ],
    skills: [
      "Angular",
      "Typescript",
      "Design Patterns",
      "GIT",
      "HTML",
      "CSS",
      "UX UI Design",
      "SQL",
      "MongoDB",
      "Express.js",
      "Kotlin",
      "NestJS",
      "TailwindCSS",
      "Linux",
      "Advance English",
    ],
    projectList: [
      {
        name: "Nutripia",
        type: "Landing Page",
        description:
          "Created for a nutritionist, with a modern and clean design that conveys professionalism and approachability.",
        techStack: [
          SkillOptions.ANGULAR,
          SkillOptions.TAILWINDCSS,
          SkillOptions.SQL,
          SkillOptions.FIGMA,
        ],
        isVertical: false,
        desktopImage: NutripiaDesktop,
        mobileImage: NutripiaMobile,
        websiteLink: "https://nutripia.netlify.app/",
        codeLink: "",
      },
      {
        name: "Criszul",
        type: "Landing Page",
        description:
          "Elegant shipping company design with a modern glassy-bento interface and a functional contact form for an attractive, user-friendly experience.",
        techStack: [
          SkillOptions.FIGMA,
          SkillOptions.HTML,
          SkillOptions.CSS,
          SkillOptions.EXPRESS,
        ],
        isVertical: true,
        websiteLink: "https://criszul.netlify.app/",
        codeLink: "",
        desktopImage: CriszulDesktop,
        mobileImage: CriszulMobile,
      },
      {
        name: "Invoce",
        type: "App",
        description:
          "Generates billing invoices in PDF format that are available for download, using the React PDF library for seamless and efficient document creation.",
        techStack: [SkillOptions.FIGMA, SkillOptions.HTML, SkillOptions.CSS],
        desktopImage: CheckGeneratorDesktop,
        mobileImage: CheckGeneratorMobile,
        isVertical: false,
        websiteLink: "https://cuentas-pdf.netlify.app",
        codeLink: "https://github.com/JooseMM/cuentas-PDF",
      },
    ],
    contactInfo: [...CONTACT_LIST],
  },
};
