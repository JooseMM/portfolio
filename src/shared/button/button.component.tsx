import { NavLink } from "react-router";
import "./button.styles.css";

interface Props {
  children: React.ReactNode;
  to: string;
  isSecundary?: boolean;
}
export const Button = ({ children, to, isSecundary = false }: Props) => {
  return (
    <NavLink
      to={to}
      className={`button ${isSecundary ? "button--secundary" : ""}`}
    >
      {children}
    </NavLink>
  );
};
