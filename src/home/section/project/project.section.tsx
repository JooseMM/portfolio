import "./project.style.css";
import { TitleWrapper } from "../../../shared/titleWrapper/titleWrapper.component";
import { useUI } from "../../../shared/utils/context/hook.context";
import { ThemeCSSColorOptions } from "../../../shared/utils/interfaces/ThemeCSSColorOptions.enum";
import { ThemeOptions } from "../../../shared/utils/interfaces/Theme.enum";
import { Project } from "./components/project.component";
import { useDeviceType } from "../../../shared/utils/customHooks/useCurrentDeviceType.hook";
import { DeviceTypeOptions } from "../../../shared/utils/interfaces/DeviceTypeOptions.enum";
import { LanguageOptions } from "../../../shared/utils/interfaces/LanguageOptions.enum";
import type { SectionId } from "../../../shared/utils/interfaces/SectionId.type";
import { CONTENT } from "../../../shared/utils/context/content.utils";
import { useEffect } from "react";

export const ProjectSection = ({ id }: SectionId) => {
  const { currentTheme, preferredLanguage } = useUI();
  const currentDevice = useDeviceType();

  return (
    <section className="project_section" id={id}>
      <TitleWrapper
        style={{
          backgroundColor:
            currentTheme === ThemeOptions.DARK
              ? ThemeCSSColorOptions.SECUNDARY
              : ThemeCSSColorOptions.QUINARY,
        }}
      >
        <h2>
          {preferredLanguage === LanguageOptions.ES ? "Proyectos" : "Projects"}
        </h2>
      </TitleWrapper>
      <div className="project_section__list">
        {CONTENT[preferredLanguage].projectList.map(({ isVertical, ...project }, index) => (
          <Project
            {...project}
            key={index}
            className={`${currentDevice === DeviceTypeOptions.MOBILE ? "project--long" : currentDevice === DeviceTypeOptions.TABLET ? "" : isVertical ? "project--long" : ""}`}
            isVertical={
              currentDevice === DeviceTypeOptions.MOBILE
                ? true
                : currentDevice === DeviceTypeOptions.TABLET
                  ? false
                  : isVertical
                    ? true
                    : false
            }
          />
        ))}
      </div>
    </section>
  );
};
