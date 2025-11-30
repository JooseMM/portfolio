import "./hero.style.css";
import HeroImage from "./images/hero-image.png";
import { Button } from "../../../shared/button/button.component";
import { Arrow } from "./components/arrow.icon";
import { SkillBar } from "../../../shared/skills/skillBar.component";
import { SkillOptions } from "../../../shared/utils/interfaces/SkillOptions.enum";
import { useUI } from "../../../shared/utils/context/hook.context";
import { LanguageOptions } from "../../../shared/utils/interfaces/LanguageOptions.enum";
import type { SectionId } from "../../../shared/utils/interfaces/SectionId.type";
import { CONTENT } from "../../../shared/utils/context/content.utils";

export const HeroSection = ({ id }: SectionId) => {
  const { preferredLanguage } = useUI();
  return (
    <section className="hero" id={id}>
      <div className="hero__image">
        <img src={HeroImage} />
      </div>
      <div className="hero__description">
        <h1>
          {preferredLanguage === LanguageOptions.ES ? (
            <>
              Soy <b>Jose</b>, Fullstack Dev.
            </>
          ) : (
            <>
              I am <b>Jose</b>, Fullstack Dev.
            </>
          )}
        </h1>
        <p>{CONTENT[preferredLanguage].heroParagraph}</p>
        <div>
          <Button to="/contact/#navbar">
            {preferredLanguage === LanguageOptions.ES
              ? "Contratame"
              : "Hire me"}
          </Button>
          <a className="hero__projects" href="#projects">
            <span>
              {preferredLanguage === LanguageOptions.ES
                ? "Proyectos"
                : "Projects"}
            </span>
            <Arrow style={{ position: "absolute", right: 0 }} />
          </a>
        </div>
        <SkillBar
          techStack={[
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
