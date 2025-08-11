import "./project.style.css";
import { TitleWrapper } from "../../../shared/titleWrapper/titleWrapper.component";
import { useUI } from "../../../shared/utils/context/hook.context";
import { ThemeCSSColor } from "../../../shared/utils/interfaces/ThemeCSSColor.enum";
import { ThemeOptions } from "../../../shared/utils/interfaces/Theme.enum";
import { Project } from "./components/project.component";
import { PROJECT_LIST } from "./project.utils";

export const ProjectSection = () => {
  const { currentTheme } = useUI();
  return (
    <section className="project_section">
      <TitleWrapper
        style={{
          backgroundColor:
            currentTheme === ThemeOptions.DARK
              ? ThemeCSSColor.SECUNDARY
              : ThemeCSSColor.QUINARY,
          transform: "translateX(3rem)",
        }}
      >
        <h2>Proyectos</h2>
      </TitleWrapper>
      <div className="project_section__list">
        {PROJECT_LIST.map(({ isVertical, ...project }, index) => (
          <Project
            {...project}
            key={index}
            className={`${isVertical ? "project_section__long" : ""}`}
            isVertical={isVertical}
          />
        ))}
      </div>
    </section>
  );
};
