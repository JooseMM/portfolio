import { Button } from "../../../shared/button/button.component";
import { ThemeCSSColorOptions } from "../../../shared/utils/interfaces/ThemeCSSColorOptions.enum";
import "./cta.style.css";

export const CTASection = () => {
  return (
    <section className="cta" style={{ backgroundColor: ThemeCSSColorOptions.PRIMARY }}>
      <h2>¿Te interesa trabajar conmigo?</h2>
      <Button to="/contact" className="cta__button">
        ¡Contactame!
      </Button>
    </section>
  );
};
