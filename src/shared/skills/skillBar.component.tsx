import { SKILL_LIST, type SkillBarProps } from "./skillBar.utils";
import "./skillBar.styles.css";

export const SkillBar = ({ skillList, isVertical = false }: SkillBarProps) => {
  return (
    <div className={`skill_bar ${isVertical ? "skill_bar--vertical": ""}`}>
      {skillList.map((skill) => {
        const Icon = SKILL_LIST[skill];
        return <Icon key={skill} />;
      })}
    </div>
  );
};
