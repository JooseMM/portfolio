import { NavLink } from "react-router";
import "./button.style.css";
import type React from "react";
import { ThemeCSSColorOptions } from "../utils/interfaces/ThemeCSSColorOptions.enum";

interface Props {
  children: React.ReactNode;
  to?: string;
  href?: string;
  isSecundary?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export const Button = ({
  children,
  href,
  style,
  to,
  className,
  isSecundary = false,
}: Props) => {
  return to ? (
    <NavLink
      to={to!}
      style={style}
      className={`button ${isSecundary ? "button--secundary" : ""} ${className}`}
    >
      {children}
    </NavLink>
  ) : (
    <a
      href={href}
      style={{
        border: isSecundary ? `1px ${ThemeCSSColorOptions.TERTIARY} solid` : "none",
        ...style,
      }}
      target="_blank"
      className={`button ${isSecundary ? "button--secundary" : ""} ${!href && !to ? "button--disable" : ""} ${className}`}
    >
      {children}
    </a>
  );
};
