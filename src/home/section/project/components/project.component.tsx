import { Button } from "../../../../shared/button/button.component";
import { SkillBar } from "../../../../shared/skills/skillBar.component";
import { useUI } from "../../../../shared/utils/context/hook.context";
import { LanguageOptions } from "../../../../shared/utils/interfaces/LanguageOptions.enum";
import type { Skill } from "../../../../shared/utils/interfaces/Skills.type";
import { ThemeOptions } from "../../../../shared/utils/interfaces/Theme.enum";
import { ThemeCSSColorOptions } from "../../../../shared/utils/interfaces/ThemeCSSColorOptions.enum";
import "./project.style.css";

export interface Props {
  name: string;
  type: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  techStack: Skill[];
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
  name,
  type,
  className,
  techStack,
  isVertical = false,
}: Props) => {
  const { currentTheme, preferredLanguage } = useUI();

  return (
    <div
      style={{
        border: `0.1rem solid ${currentTheme === ThemeOptions.DARK ? "#457E7E" : "#97bfbf"}`,
      }}
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
      {isVertical ? null : <SkillBar techStack={techStack} isVertical={true} />}
      <div className="project__description">
        <h3>
          {name} <b>{type}</b>
        </h3>
        <p>{description}</p>
        {isVertical ? (
          <SkillBar
            techStack={techStack}
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
