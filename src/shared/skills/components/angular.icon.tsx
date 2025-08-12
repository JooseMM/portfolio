import { useUI } from "../../utils/context/hook.context";
import { ThemeOptions } from "../../utils/interfaces/Theme.enum";
import { getSkillColor } from "../skillBar.utils";

export const AngularIcon = () => {
  const { currentTheme } = useUI();

  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6406 0L0.375 6.25L3.03125 27.5L17.6406 35L32.25 27.5L34.9062 6.25L17.6406 0Z"
        fill={getSkillColor(currentTheme)}
      />
      <path
        d="M17.6406 0V35L32.25 27.5L34.9062 6.25L17.6406 0Z"
        fill={getSkillColor(currentTheme)}
      />
      <path
        d="M17.64 3.86719L6.84668 26.7048H10.871L13.0407 21.5946H22.2021L24.3719 26.7048H28.3962L17.64 3.86719ZM20.7927 18.4446H14.4873L17.64 11.2873L20.7927 18.4446Z"
        fill={currentTheme === ThemeOptions.DARK ? "#4C8080" : "#BECCCC"}
      />
    </svg>
  );
};
