import "./hero.style.css";
import HeroImage from "./images/hero-image.png";
import { Button } from "../../../shared/button/button.component";
import { Arrow } from "./components/arrow.icon";
import { SkillBar } from "../../../shared/skills/skillBar.component";
import { SkillOptions } from "../../../shared/utils/interfaces/SkillOptions.enum";

export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__image">
        <img src={HeroImage} />
      </div>
      <div className="hero__description">
        <h1>
          Soy <b>Jose</b>, Fullstack Dev.
        </h1>
        <p>
          Hola! mi nombre es Jose Moreno, un desarrollador web autodidacta, con
          bases fuertes en diseño de UI UX.
        </p>
        <div>
          <Button to="/contacto">Contratame</Button>
          <a className="hero__projects" href="#projects">
            <span>Proyectos</span>
            <Arrow style={{ position: "absolute", right: 0 }} />
          </a>
        </div>
        <SkillBar
          skillList={[
            SkillOptions.ANGULAR,
            SkillOptions.REACT,
            SkillOptions.ANDROID,
            SkillOptions.NESTJS,
            SkillOptions.EXPRESS,
          ]}
        />
      </div>
    </section>
  );
};
