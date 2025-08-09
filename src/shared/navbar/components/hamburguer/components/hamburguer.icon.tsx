import { useUI } from "../../../../utils/context/hook.context";
import { ThemeOptions } from "../../../../utils/interfaces/Theme.enum";

export const Hamburguer = () => {
  const { currentTheme } = useUI();
  return (
    <svg
      width="50"
      height="46"
      viewBox="0 0 50 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.33398 32.5833H41.6673M8.33398 23H41.6673M8.33398 13.4166H41.6673"
        stroke={currentTheme === ThemeOptions.DARK ? "#FFF" : "#1D2626"}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
