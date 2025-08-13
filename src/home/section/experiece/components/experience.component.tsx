import { useUI } from "../../../../shared/utils/context/hook.context";
import { ThemeOptions } from "../../../../shared/utils/interfaces/Theme.enum";
import { ThemeCSSColorOptions } from "../../../../shared/utils/interfaces/ThemeCSSColorOptions.enum";
import type { ExperienceInfo } from "../experience.utils";
import "./experience.style.css";

export const ExperienceBox = ({
  jobTitle,
  company,
  description,
  image,
  year,
  isSecundary = false,
}: ExperienceInfo & { isSecundary?: boolean }) => {
  const { currentTheme } = useUI();

  return (
    <li
      style={{
        border: `0.1rem solid ${currentTheme === ThemeOptions.DARK ? "#457E7E" : "#97bfbf"}`,
      }}
      className={`experience__box ${isSecundary ? "experience__box--secundary" : ""}`}
    >
      <div className="experience__box__description">
        <span>{company}</span>
        <h3>
          {jobTitle} - {year}
        </h3>
        <p>{description}</p>
      </div>
      <div
        className="experience__box__image"
        style={{
          backgroundColor:
            currentTheme === ThemeOptions.DARK
              ? ThemeCSSColorOptions.SECUNDARY
              : ThemeCSSColorOptions.TERTIARY,
        }}
      >
        <img src={image} />
      </div>
    </li>
  );
};
