import { useState } from "react";
import "./themeSwitcher.styles.css";
import LightThemeIcon from "./icons/sun-enable.svg";
import DarkThemeIcon from "./icons/moon-enable.svg";

export const ThemeSwitcher = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isChanging, setIsChanging] = useState(false);

  const handleClick = () => {
    setIsChanging(true);
    setTimeout(() => setIsLightTheme((prev) => !prev), 100);
    setTimeout(() => setIsChanging(false), 300);
  };

  return (
    <button className="switcher" onClick={handleClick}>
      <div
        className={`switcher__current_theme  ${isLightTheme ? "" : "switcher--dark"}`}
      >
        <img
          src={isLightTheme ? LightThemeIcon : DarkThemeIcon}
          className={`${isChanging ? "switcher--animation" : ""}`}
        />
      </div>
    </button>
  );
};
