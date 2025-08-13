import { NavLink } from "react-router";
import { ThemeCSSColorOptions } from "../utils/interfaces/ThemeCSSColorOptions.enum";
import "./footer.style.css";
import { CONTACT_LIST, type ContactInfo } from "../../contact/contact.utils";

export const Footer = () => {
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
          <NavLink to="/">Jose Moreno</NavLink>
        </li>
        <li>© Copyright 2024</li>
      </ul>
      <ul>
        <li className="footer__title">Navegacion</li>
        <li>
          <a>Inicio</a>
        </li>
        <li>
          <a>Proyecto</a>
        </li>
        <li>
          <a>Sobre mi</a>
        </li>
        <li>
          <NavLink to="/contact">Contacto</NavLink>
        </li>
      </ul>
      <ul className="footer__socials">
        <li className="footer__title">Redes Sociales</li>
        <li className="footer__icons" style={{ opacity: 1 }}>
          {CONTACT_LIST.map(({ link, Icon, name }: ContactInfo) => {
            return (
              <a href={link} target="_blank" key={name}>
                <Icon fillColor={ThemeCSSColorOptions.OCTONARY} style={{ width: "2rem" }} />
              </a>
            );
          })}
        </li>
      </ul>
    </footer>
  );
};
