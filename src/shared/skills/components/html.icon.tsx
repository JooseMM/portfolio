import { useUI } from "../../utils/context/hook.context";
import { getSkillColor } from "../skillBar.utils";

export const HTMLIcon = () => {
  const { currentTheme } = useUI();

  return (
    <svg
      width="31"
      height="41"
      viewBox="0 0 31 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.6792 0H5.52715V1.82578H7.2176V0H9.06564V5.52892H7.21769V3.67751H5.52724V5.52892H3.67927L3.6792 0Z"
        fill={getSkillColor(currentTheme)}
      />
      <path
        d="M11.496 1.83347H9.86914V0H14.9718V1.83347H13.3441V5.52892H11.4961L11.496 1.83347Z"
        fill={getSkillColor(currentTheme)}
      />
      <path
        d="M15.7817 0H17.7087L18.894 1.9427L20.078 0H22.0057V5.52892H20.1653V2.78848L18.894 4.75433H18.8622L17.5898 2.78848V5.52892H15.7817V0Z"
        fill={getSkillColor(currentTheme)}
      />
      <path
        d="M22.9253 0H24.7739V3.70138H27.3726V5.52892H22.9253V0Z"
        fill={getSkillColor(currentTheme)}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.62013 37.7069L0.125 8.05737H30.875L27.3775 37.7023L15.4824 40.9999L3.62013 37.7069ZM10.6884 21.4782L10.3561 17.7544H24.2711L24.5967 14.118H6.38194L7.36273 25.1146H19.9652L19.5433 29.8306L15.4875 30.9253L15.4846 30.9265L11.4348 29.833L11.1759 26.9328H7.52555L8.03501 32.6425L15.4839 34.7103L22.9424 32.6424L23.8515 22.4547L23.9402 21.4782H10.6884Z"
        fill={getSkillColor(currentTheme)}
      />
    </svg>
  );
};
