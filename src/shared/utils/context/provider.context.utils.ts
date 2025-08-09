import { ThemeCSSColor } from "../interfaces/ThemeCSSColor.enum";
import { ThemeCSSVariable } from "../interfaces/ThemeCSSVariables.enum";

export const setTheme = (isDakTheme: boolean, root: HTMLElement) => {
  root.style.setProperty(
    ThemeCSSVariable.BACKGROUND_PRIMARY,
    isDakTheme ? ThemeCSSColor.SECUNDARY : ThemeCSSColor.QUINARY,
  );
  root.style.setProperty(
    ThemeCSSVariable.BACKGROUND_SECUNDARY,
    isDakTheme ? ThemeCSSColor.PRIMARY : ThemeCSSColor.SENARY,
  );
  root.style.setProperty(
    ThemeCSSVariable.CONTRAST_ACCENT,
    isDakTheme ? ThemeCSSColor.QUATERNARY : ThemeCSSColor.PRIMARY,
  );
  root.style.setProperty(
    ThemeCSSVariable.TEXT,
    isDakTheme ? ThemeCSSColor.OCTONARY : ThemeCSSColor.SEPTENARY,
  );
};
