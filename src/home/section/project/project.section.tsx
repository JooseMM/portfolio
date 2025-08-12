import "./project.style.css";
import { TitleWrapper } from "../../../shared/titleWrapper/titleWrapper.component";
import { useUI } from "../../../shared/utils/context/hook.context";
import { ThemeCSSColor } from "../../../shared/utils/interfaces/ThemeCSSColor.enum";
import { ThemeOptions } from "../../../shared/utils/interfaces/Theme.enum";
import { Project } from "./components/project.component";
import { PROJECT_LIST } from "./project.utils";
import { useDeviceType } from "../../../shared/utils/customHooks/useCurrentDeviceType.hook";
import { DeviceTypeOptions } from "../../../shared/utils/interfaces/DeviceTypeOptions.enum";

export const ProjectSection = () => {
  const { currentTheme } = useUI();
  const currentDevice = useDeviceType();

  return (
    <section className="project_section">
      <TitleWrapper
        style={{
          backgroundColor:
            currentTheme === ThemeOptions.DARK
              ? ThemeCSSColor.SECUNDARY
              : ThemeCSSColor.QUINARY,
        }}
        className="title--padding"
      >
        <h2>Proyectos</h2>
      </TitleWrapper>
      <div className="project_section__list">
        {PROJECT_LIST.map(({ isVertical, ...project }, index) => (
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
