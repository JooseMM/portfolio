import "./button.style.css";
import { NavLink } from "react-router";
import { ThemeCSSColorOptions } from "../utils/interfaces/ThemeCSSColorOptions.enum";
import type { AnchorEvent, ButtonProps } from "./button.utils";

export const Button = ({
  children,
  href,
  style,
  to,
  className,
  isSecundary = false,
}: ButtonProps) => {
  const preventReload = (event: AnchorEvent) => {
    return href ? undefined : event.preventDefault();
  };

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
        border: isSecundary
          ? `1px ${ThemeCSSColorOptions.TERTIARY} solid`
          : "none",
        ...style,
      }}
      onClick={preventReload}
      target="_blank"
      className={`button ${isSecundary ? "button--secundary" : ""} ${!href && !to ? "button--disable" : ""} ${className}`}
    >
      {children}
    </a>
  );
};
