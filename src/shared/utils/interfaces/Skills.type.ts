import type { SkillOptions  } from "./SkillOptions.enum";

export type Skill = (typeof SkillOptions)[keyof typeof SkillOptions];
