import HeroImage from "./images/hero-image.png";
import "./hero.section.css";

export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__image">
        <img src={HeroImage} />
      </div>
      <div className="hero__description">
        <h1>
          Soy <b>Jose</b>, Frontend Dev.
        </h1>
        <p>
          Hola! mi nombre es Jose Moreno, un desarrollador web autodidacta, con
          bases fuertes en diseño de UI UX.
        </p>
      </div>
    </section>
  );
};
