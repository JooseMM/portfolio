import type { Experience } from "../../../../shared/utils/interfaces/Experience.type";
import { ThemeCSSColorOptions } from "../../../../shared/utils/interfaces/ThemeCSSColorOptions.enum";
import "./experience.style.css";

export const ExperienceBox = ({
  role,
  companyName,
  description,
  image,
  from,
  isSecundary = false,
}: Experience & { isSecundary?: boolean }) => {
  return (
    <li
      style={{
        border: `0.1rem solid #457E7E`,
      }}
      className={`experience__box ${isSecundary ? "experience__box--secundary" : ""}`}
    >
      <div className="experience__box__description">
        <span>{companyName}</span>
        <h3>
          {role} - {from}
        </h3>
        <p>{description}</p>
      </div>
      <div
        className="experience__box__image"
        style={{
          backgroundColor:
            companyName === "Totalpack"
              ? ThemeCSSColorOptions.QUINARY
              : ThemeCSSColorOptions.SECUNDARY,
        }}
      >
        <img src={image} />
      </div>
    </li>
  );
};
