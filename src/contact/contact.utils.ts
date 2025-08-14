import { EmailIcon } from "../shared/socials/email.icon";
import { GithubIcon } from "../shared/socials/github.icon";
import { LinkedinIcon } from "../shared/socials/linkedin.icon";
import type { IconProps } from "../shared/socials/props.type";
import { WhatsappIcon } from "../shared/socials/whatsapp.icon";

export interface ContactInfo {
  name: string;
  link: string;
  visible: string;
  Icon: (props: IconProps) => React.JSX.Element;
}

export const CONTACT_LIST: ContactInfo[] = [
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
  {
    name: "Email",
    link: "mailto:jamm.webdev@gmail.com",
    visible: "jamm.webdev@gmail.com",
    Icon: EmailIcon,
  },
];
