import { SkillOptions } from "../utils/interfaces/SkillOptions.enum";
import type { Skill } from "../utils/interfaces/Skills.type";
import { ThemeOptions } from "../utils/interfaces/Theme.enum";
import type { Theme } from "../utils/interfaces/Theme.type";
import { ThemeCSSColorOptions } from "../utils/interfaces/ThemeCSSColorOptions.enum";
import { AndroidIcon } from "./components/android.icon";
import { AngularIcon } from "./components/angular.icon";
import { CSSIcon } from "./components/css.icon";
import { ExpressIcon } from "./components/express.icon";
import { FigmaIcon } from "./components/figman.icon";
import { HTMLIcon } from "./components/html.icon";
import { KotlinIcon } from "./components/kotlin.icon";
import { MongoDBIcon } from "./components/mongoDB.icon";
import { NestJSIcon } from "./components/nestJS.icon";
import { ReactIcon } from "./components/react.icon";
import { TailwindCSSIcon } from "./components/tailwindCSS.icon";
import { TypescriptIcon } from "./components/typescript.icon";

export const getSkillColor = (theme: Theme) => {
  return theme === ThemeOptions.DARK
    ? ThemeCSSColorOptions.QUINARY
    : ThemeCSSColorOptions.NONARY;
};

export const SKILL_LIST = {
  [SkillOptions.NESTJS]: NestJSIcon,
  [SkillOptions.EXPRESS]: ExpressIcon,
  [SkillOptions.ANGULAR]: AngularIcon,
  [SkillOptions.REACT]: ReactIcon,
  [SkillOptions.TAILWINDCSS]: TailwindCSSIcon,
  [SkillOptions.MONGODB]: MongoDBIcon,
  [SkillOptions.TYPESCRIPT]: TypescriptIcon,
  [SkillOptions.HTML]: HTMLIcon,
  [SkillOptions.CSS]: CSSIcon,
  [SkillOptions.KOTLIN]: KotlinIcon,
  [SkillOptions.ANDROID]: AndroidIcon,
  [SkillOptions.FIGMA]: FigmaIcon,
};

export interface SkillBarProps {
  skillList: Skill[];
  isVertical?: boolean;
  style?: React.CSSProperties;
}
