import { useUI } from "../../utils/context/hook.context";
import { getSkillColor } from "../skillBar.utils";

export const FigmaIcon = () => {
  const { currentTheme } = useUI();

  return (
    <svg
      width="22"
      height="32"
      viewBox="0 0 22 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Figma Icon</title>
      <path
        opacity="0.6"
        d="M10.6668 0H5.33336C2.38782 0 0 2.38782 0 5.33336C0 8.27889 2.38782 10.6667 5.33336 10.6667H10.6668V0Z"
        fill={getSkillColor(currentTheme)}
        fillOpacity="0.8"
      />
      <path
        opacity="0.4"
        d="M10.6668 10.6664H5.33336C2.38782 10.6664 0 13.0543 0 15.9998C0 18.9454 2.38782 21.3332 5.33336 21.3332H10.6668V10.6664Z"
        fill={getSkillColor(currentTheme)}
        fillOpacity="0.7"
      />
      <path
        d="M21.3328 15.9998C21.3328 18.9454 18.9449 21.3332 15.9993 21.3332C13.0539 21.3332 10.666 18.9454 10.666 15.9998C10.666 13.0543 13.0539 10.6664 15.9993 10.6664C18.9449 10.6664 21.3328 13.0543 21.3328 15.9998Z"
        fill={getSkillColor(currentTheme)}
      />
      <path
        opacity="0.4"
        d="M5.33336 21.3337H10.6668V26.667C10.6668 29.6126 8.27893 32.0005 5.33336 32.0005C2.38782 32.0005 0 29.6126 0 26.667C0 23.7216 2.38782 21.3337 5.33336 21.3337Z"
        fill={getSkillColor(currentTheme)}
        fillOpacity="0.7"
      />
      <path
        opacity="0.8"
        d="M10.666 0H15.9993C18.9449 0 21.3328 2.38782 21.3328 5.33336C21.3328 8.27889 18.9449 10.6667 15.9993 10.6667H10.666V0Z"
        fill={getSkillColor(currentTheme)}
        fillOpacity="0.9"
      />
    </svg>
  );
};
