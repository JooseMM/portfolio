import { TitleWrapper } from "../../../shared/titleWrapper/titleWrapper.component";
import { useUI } from "../../../shared/utils/context/hook.context";
import { LanguageOptions } from "../../../shared/utils/interfaces/LanguageOptions.enum";
import type { SectionId } from "../../../shared/utils/interfaces/SectionId.type";
import { ThemeOptions } from "../../../shared/utils/interfaces/Theme.enum";
import { ThemeCSSColorOptions } from "../../../shared/utils/interfaces/ThemeCSSColorOptions.enum";
import { ExperienceBox } from "./components/experience.component";
import "./experience.style.css";
import { EXPERIENCE_LIST, type ExperienceInfo } from "./experience.utils";

export const ExperienceSection = ({ id }: SectionId) => {
  const { preferredLanguage, currentTheme } = useUI();

  return (
    <section className="experience" id={id}>
      <TitleWrapper
        style={{
          backgroundColor:
            currentTheme === ThemeOptions.DARK
              ? ThemeCSSColorOptions.PRIMARY
              : ThemeCSSColorOptions.SENARY,
          zIndex: 20,
          position: "relative",
        }}
      >
        <h2>
          {preferredLanguage === LanguageOptions.ES
            ? "Experiencia"
            : "Experience"}
        </h2>
      </TitleWrapper>
      <ul className="experience__list">
        {EXPERIENCE_LIST[preferredLanguage].map(
          (experience: ExperienceInfo, index) => (
            <ExperienceBox
              {...experience}
              key={index}
              isSecundary={(index + 1) % 2 === 0}
            />
          ),
        )}
      </ul>
    </section>
  );
};
