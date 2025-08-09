import { NavLink } from "react-router";
import { useUI } from "../utils/context/hook.context";
import { ThemeOptions } from "../utils/interfaces/Theme.enum";
import { HamburguerMenu } from "./components/hamburguer/hamburguerMenu.component";
import { ThemeSwitcher } from "./components/switcher/themeSwitcher.component";
import "./navbar.styles.css";
import { useEffect, useState } from "react";
import { useDeviceType } from "../utils/customHooks/useCurrentDeviceType.hook";
import { DeviceTypeOptions } from "../utils/interfaces/DeviceTypeOptions.enum";

type AnimationState = "opening" | "closing" | "idle";

export const Navbar = () => {
  const { currentTheme, mobileMenuOpen } = useUI();
  const [animationState, setAnimationState] = useState<AnimationState>("idle");
  const [shouldOpen, setShouldOpen] = useState(false);
  const currentDeviceType = useDeviceType();

  useEffect(() => {
    setAnimationState(mobileMenuOpen ? "opening" : "closing");

    if (mobileMenuOpen) {
      setShouldOpen(mobileMenuOpen);
    }

    setTimeout(() => {
      setAnimationState("idle");
      setShouldOpen(mobileMenuOpen);
    }, 300);
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`navbar ${currentTheme === ThemeOptions.DARK ? "navbar--dark" : ""}`}
    >
      <a>Jose M</a>
      {shouldOpen || currentDeviceType === DeviceTypeOptions.DESKTOP ? (
        <div
          className={`navbar__links ${animationState === "opening" ? "navbar__links--opening" : animationState === "closing" ? "navbar__links--closing" : "idle"}`}
        >
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <a>Proyectos</a>
            </li>
            <li>
              <a>Sobre mi</a>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
          <ThemeSwitcher />
        </div>
      ) : null}
      <HamburguerMenu />
    </nav>
  );
};
