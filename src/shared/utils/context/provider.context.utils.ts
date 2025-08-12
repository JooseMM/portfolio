import { ThemeCSSColorOptions } from "../interfaces/ThemeCSSColorOptions.enum";
import { ThemeCSSVariable } from "../interfaces/ThemeCSSVariables.enum";

export const setTheme = (isDakTheme: boolean, root: HTMLElement) => {
  root.style.setProperty(
    ThemeCSSVariable.BACKGROUND_PRIMARY,
    isDakTheme ? ThemeCSSColorOptions.SECUNDARY : ThemeCSSColorOptions.QUINARY,
  );
  root.style.setProperty(
    ThemeCSSVariable.BACKGROUND_SECUNDARY,
    isDakTheme ? ThemeCSSColorOptions.PRIMARY : ThemeCSSColorOptions.SENARY,
  );
  root.style.setProperty(
    ThemeCSSVariable.CONTRAST_ACCENT,
    isDakTheme ? ThemeCSSColorOptions.QUATERNARY : ThemeCSSColorOptions.PRIMARY,
  );
  root.style.setProperty(
    ThemeCSSVariable.TEXT,
    isDakTheme ? ThemeCSSColorOptions.OCTONARY : ThemeCSSColorOptions.SEPTENARY,
  );
  root.style.setProperty(
    ThemeCSSVariable.SKILL_BACKGROUND,
    isDakTheme ? "#4C8080" : "#BECCCC",
  );
};
