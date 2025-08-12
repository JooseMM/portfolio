import { Button } from "../../../../shared/button/button.component";
import { SkillBar } from "../../../../shared/skills/skillBar.component";
import { useUI } from "../../../../shared/utils/context/hook.context";
import { LanguageOptions } from "../../../../shared/utils/interfaces/LanguageOptions.enum";
import type { Skill } from "../../../../shared/utils/interfaces/Skills.type";
import { ThemeOptions } from "../../../../shared/utils/interfaces/Theme.enum";
import { ThemeCSSColorOptions } from "../../../../shared/utils/interfaces/ThemeCSSColorOptions.enum";
import "./project.style.css";

export interface Props {
  title: string;
  description: { [LanguageOptions.ES]: string; [LanguageOptions.EN]: string };
  desktopImage: string;
  mobileImage: string;
  skillList: Skill[];
  className?: string;
  codeLink?: string;
  websiteLink?: string;
  isVertical?: boolean;
}

export const Project = ({
  mobileImage,
  desktopImage,
  codeLink,
  websiteLink,
  description,
  title,
  className,
  skillList,
  isVertical = false,
}: Props) => {
  const { currentTheme, preferredLanguage } = useUI();
  const [appName, ...appType] = title.split(" ");

  return (
    <div
      className={`project ${isVertical ? "project--vertical" : ""} ${className}`}
    >
      <div
        className="project__image"
        style={{
          backgroundColor:
            currentTheme === ThemeOptions.DARK
              ? ThemeCSSColorOptions.SECUNDARY
              : ThemeCSSColorOptions.TERTIARY,
        }}
      >
        <img className="project__mobile" src={mobileImage} />
        <img className="project__desktop" src={desktopImage} />
      </div>
      {isVertical ? null : <SkillBar skillList={skillList} isVertical={true} />}
      <div className="project__description">
        <h3>
          {appName} <b>{appType.join(" ")}</b>
        </h3>
        <p>{description[preferredLanguage]}</p>
        {isVertical ? (
          <SkillBar
            skillList={skillList}
            isVertical={false}
            style={{ marginTop: "0.5rem" }}
          />
        ) : null}
        <div className="project__action">
          <Button
            href={websiteLink}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "1rem 0rem 1rem 0rem",
            }}
          >
            {preferredLanguage === LanguageOptions.ES ? "Visitar" : "Visit"}
          </Button>
          <Button
            href={codeLink}
            isSecundary={true}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "1rem 0rem 1rem 0rem",
            }}
          >
            {preferredLanguage === LanguageOptions.ES ? "Codigo" : "Code"}
          </Button>
        </div>
      </div>
    </div>
  );
};
