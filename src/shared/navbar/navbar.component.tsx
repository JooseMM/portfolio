import "./navbar.style.css";
import { NavLink } from "react-router";
import { useUI } from "../utils/context/hook.context";
import { ThemeOptions } from "../utils/interfaces/Theme.enum";
import { HamburguerMenu } from "./components/hamburguer/hamburguerMenu.component";
import { ThemeSwitcher } from "./components/themeSwitcher/themeSwitcher.component";
import { useEffect, useState } from "react";
import { useDeviceType } from "../utils/customHooks/useCurrentDeviceType.hook";
import { DeviceTypeOptions } from "../utils/interfaces/DeviceTypeOptions.enum";
import { LanguageSwitcher } from "./components/languageSwitcher/languageSwitcher.component";
import { LINKS_OPTIONS } from "../utils/constants.utils";

type AnimationState = "opening" | "closing" | "idle";

export const Navbar = () => {
  const { currentTheme, mobileMenuOpen, preferredLanguage, closeMobileMenu } =
    useUI();
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
      id="navbar"
      className={`navbar ${currentTheme === ThemeOptions.DARK ? "navbar--dark" : ""}`}
    >
      <NavLink to="/">Jose M</NavLink>
      {shouldOpen || currentDeviceType === DeviceTypeOptions.DESKTOP ? (
        <div
          className={`navbar__links ${animationState === "opening" ? "navbar__links--opening" : animationState === "closing" ? "navbar__links--closing" : "idle"}`}
        >
          <ul>
            {LINKS_OPTIONS.map((info, index) => (
              <NavLink
                key={info.link}
                to={info.link}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  isActive &&
                  (index === 0 || index === LINKS_OPTIONS.length - 1)
                    ? "active"
                    : ""
                }
              >
                {info.visible[preferredLanguage]}
              </NavLink>
            ))}
          </ul>
          <div className="navbar__switchers">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      ) : null}
      <HamburguerMenu />
    </nav>
  );
};
