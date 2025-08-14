import { useUI } from "../../../utils/context/hook.context";
import { LanguageOptions } from "../../../utils/interfaces/LanguageOptions.enum";
import { ThemeOptions } from "../../../utils/interfaces/Theme.enum";
import { ThemeCSSColorOptions } from "../../../utils/interfaces/ThemeCSSColorOptions.enum";
import "./languageSwitcher.style.css";

export const LanguageSwitcher = () => {
  const { preferredLanguage, currentTheme, setPreferredLanguage } = useUI();

  return (
    <div className="language">
      <button
        style={
          preferredLanguage === LanguageOptions.ES
            ? {
                opacity: 1,
                backgroundColor:
                  currentTheme === ThemeOptions.DARK
                    ? ThemeCSSColorOptions.OCTONARY
                    : ThemeCSSColorOptions.PRIMARY,
                color:
                  currentTheme === ThemeOptions.DARK
                    ? ThemeCSSColorOptions.SEPTENARY
                    : ThemeCSSColorOptions.OCTONARY,
              }
            : undefined
        }
        onClick={() => setPreferredLanguage(LanguageOptions.ES)}
      >
        ES
      </button>
      <button
        style={
          preferredLanguage === LanguageOptions.EN
            ? {
                opacity: 1,
                backgroundColor:
                  currentTheme === ThemeOptions.DARK
                    ? ThemeCSSColorOptions.OCTONARY
                    : ThemeCSSColorOptions.PRIMARY,
                color:
                  currentTheme === ThemeOptions.DARK
                    ? ThemeCSSColorOptions.SEPTENARY
                    : ThemeCSSColorOptions.OCTONARY,
              }
            : undefined
        }
        onClick={() => setPreferredLanguage(LanguageOptions.EN)}
      >
        EN
      </button>
    </div>
  );
};
