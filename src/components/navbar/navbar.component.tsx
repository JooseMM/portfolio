import { ThemeSwitcher } from "../switcher/themeSwitcher.component";
import "./navbar.styles.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <a>Jose Moreno</a>
      <div className="navbar__links_wrapper">
        <ul>
          <li>
            <a>Inicio</a>
          </li>
          <li>
            <a>Proyectos</a>
          </li>
          <li>
            <a>Sobre mi</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
