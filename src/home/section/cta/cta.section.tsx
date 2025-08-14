import { Button } from "../../../shared/button/button.component";
import { useUI } from "../../../shared/utils/context/hook.context";
import { LanguageOptions } from "../../../shared/utils/interfaces/LanguageOptions.enum";
import { ThemeOptions } from "../../../shared/utils/interfaces/Theme.enum";
import { ThemeCSSColorOptions } from "../../../shared/utils/interfaces/ThemeCSSColorOptions.enum";
import "./cta.style.css";

export const CTASection = () => {
  const { currentTheme, preferredLanguage } = useUI();
  return (
    <section
      className="cta"
      style={{
        backgroundColor:
          currentTheme === ThemeOptions.DARK
            ? ThemeCSSColorOptions.SECUNDARY
            : ThemeCSSColorOptions.PRIMARY,
      }}
    >
      {preferredLanguage === LanguageOptions.ES ? (
        <h2>¿Te interesa trabajar conmigo?</h2>
      ) : (
        <h2>Are you interested in working with me?</h2>
      )}
      <Button to="/contact#contact" className="cta__button">
        {preferredLanguage === LanguageOptions.ES
          ? "¡Contactame!"
          : "Contact me!"}
      </Button>
    </section>
  );
};
