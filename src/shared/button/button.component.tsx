import { NavLink } from "react-router";
import "./button.style.css";
import type React from "react";
import { ThemeCSSColor } from "../utils/interfaces/ThemeCSSColor.enum";
import { useUI } from "../utils/context/hook.context";
import { useState } from "react";
import { ThemeOptions } from "../utils/interfaces/Theme.enum";

interface Props {
  children: React.ReactNode;
  to?: string;
  href?: string;
  isSecundary?: boolean;
  style?: React.CSSProperties;
}
export const Button = ({
  children,
  href,
  style,
  to,
  isSecundary = false,
}: Props) => {
  const { currentTheme } = useUI();

  return href ? (
    <a
      href={href}
      style={{
        border: `1px ${
          currentTheme === ThemeOptions.DARK && isSecundary
            ? ThemeCSSColor.SENARY
            : ThemeCSSColor.TERTIARY
        } solid`,
        ...style,
      }}
      className={`button ${isSecundary ? "button--secundary" : ""} ${!href && !to ? "button--disable" : ""}`}
    >
      {children}
    </a>
  ) : (
    <NavLink
      to={to!}
      style={style}
      className={`button ${isSecundary ? "button--secundary" : ""} ${!href && !to ? "button--disable" : ""}`}
    >
      {children}
    </NavLink>
  );
};
