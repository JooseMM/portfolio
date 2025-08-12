import { EXPERIENCE_LIST } from "./experience.utils";

export const ExperienceSection = () => {
  return (
    <section className="experience">
      <ul className="experience__list">
        {EXPERIENCE_LIST.map(({ year, description, jobTitle }) => (
          <li className="experience__box">
            <div>
              <h3>{jobTitle}</h3>
              <span>{year}</span>
            </div>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
