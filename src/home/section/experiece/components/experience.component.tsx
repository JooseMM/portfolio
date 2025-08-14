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
  return (
    <li
      style={{
        border: `0.1rem solid #457E7E`,
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
          backgroundColor: ThemeCSSColorOptions.SECUNDARY,
        }}
      >
        <img src={image} />
      </div>
    </li>
  );
};
