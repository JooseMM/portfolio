import type { ThemeCSSColor } from "../utils/interfaces/ThemeCSSColor.enum";

export interface IconProps {
  fillColor?: ThemeCSSColor;
  style?: React.CSSProperties;
  className?: string;
}
