import { SKILL_LIST, type SkillBarProps } from "./skillBar.utils";
import "./skillBar.style.css";

export const SkillBar = ({
  techStack,
  isVertical = false,
  style,
}: SkillBarProps) => {
  return (
    <div
      className={`skill_bar ${isVertical ? "skill_bar--vertical" : ""}`}
      style={style}
    >
      {techStack.map((skill) => {
        const Icon = SKILL_LIST[skill];
        return <Icon key={skill} />;
      })}
    </div>
  );
};
