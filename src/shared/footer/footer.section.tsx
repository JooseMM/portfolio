import { NavLink } from "react-router";
import { ThemeCSSColorOptions } from "../utils/interfaces/ThemeCSSColorOptions.enum";
import "./footer.style.css";
import { CONTACT_LIST, type ContactInfo } from "../../contact/contact.utils";
import { useUI } from "../utils/context/hook.context";
import { LINKS_OPTIONS } from "../utils/constants.utils";
import { LanguageOptions } from "../utils/interfaces/LanguageOptions.enum";

export const Footer = () => {
  const { preferredLanguage } = useUI();
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: ThemeCSSColorOptions.SEPTENARY,
        color: ThemeCSSColorOptions.OCTONARY,
      }}
    >
      <ul>
        <li className="footer__title">
          <NavLink to="/#navbar">Jose Moreno</NavLink>
        </li>
        <li>© Copyright 2024</li>
      </ul>
      <ul>
        <li className="footer__title">
          {preferredLanguage === LanguageOptions.ES
            ? "Navegacion"
            : "Navigation"}
        </li>
        {LINKS_OPTIONS.map((info) => (
          <NavLink
            key={info.link}
            to={info.link}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {info.visible[preferredLanguage]}
          </NavLink>
        ))}
      </ul>
      <ul className="footer__socials">
        <li className="footer__title">
          {preferredLanguage === LanguageOptions.ES
            ? "Redes Sociales"
            : "Social Media"}
        </li>
        <li className="footer__icons" style={{ opacity: 1 }}>
          {CONTACT_LIST.map(({ link, Icon, name }: ContactInfo) => {
            return (
              <a href={link} target="_blank" key={name}>
                <Icon
                  fillColor={ThemeCSSColorOptions.OCTONARY}
                  style={{ width: "2rem" }}
                />
              </a>
            );
          })}
        </li>
      </ul>
    </footer>
  );
};
