import { useUI } from "../utils/context/hook.context";
import { ThemeOptions } from "../utils/interfaces/Theme.enum";
import "./titleWrapper.style.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const TitleWrapper = ({ children, style, className }: Props) => {
 const { currentTheme } = useUI()
  return (
    <div
      className={`title ${className}`}
      style={{ border: currentTheme === ThemeOptions.DARK ? "" : "0.1rem solid #97bfbf", ...style }}
    >
      {children}
    </div>
  );
};
