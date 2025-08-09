import { useState } from "react";
import "./themeSwitcher.styles.css";
import LightThemeIcon from "./icons/sun-enable.svg";
import DarkThemeIcon from "./icons/moon-enable.svg";
import { useUI } from "../../../utils/context/hook.context";
import { ThemeOptions } from "../../../utils/interfaces/Theme.enum";

export const ThemeSwitcher = () => {
  const { currentTheme, toggleTheme } = useUI();
  const [isChanging, setIsChanging] = useState(false);

  const handleClick = () => {
    setIsChanging(true);
    setTimeout(() => toggleTheme(), 100);
    setTimeout(() => setIsChanging(false), 300);
  };

  return (
    <button className="switcher" onClick={handleClick}>
      <div
        className={`switcher__current_theme  ${currentTheme === ThemeOptions.DARK ? "switcher--dark" : ""}`}
      >
        <img
          src={
            currentTheme === ThemeOptions.LIGTH ? LightThemeIcon : DarkThemeIcon
          }
          className={`${isChanging ? "switcher--animation" : ""}`}
        />
      </div>
    </button>
  );
};
