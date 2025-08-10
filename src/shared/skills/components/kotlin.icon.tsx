import { useUI } from "../../utils/context/hook.context";
import { ThemeOptions } from "../../utils/interfaces/Theme.enum";
import { getSkillColor } from "../skillBar.utils";

export const KotlinIcon = () => {
  const { currentTheme } = useUI();

  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.8079 36.8076H1.19238V1.19214H36.8079L19.0001 18.9999L36.8079 36.8076Z"
        fill={currentTheme === ThemeOptions.DARK ? "#BECCCC" : "#BECCCC"}
      />
    </svg>
  );
};
