import { Button } from "../../../shared/button/button.component";
import { useUI } from "../../../shared/utils/context/hook.context";
import { ThemeOptions } from "../../../shared/utils/interfaces/Theme.enum";
import { ThemeCSSColorOptions } from "../../../shared/utils/interfaces/ThemeCSSColorOptions.enum";
import "./cta.style.css";

export const CTASection = () => {
  const { currentTheme } = useUI();
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
      <h2>¿Te interesa trabajar conmigo?</h2>
      <Button to="/contact" className="cta__button">
        ¡Contactame!
      </Button>
    </section>
  );
};
