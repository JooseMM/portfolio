import { useUI } from "../../../shared/utils/context/hook.context";
import { LanguageOptions } from "../../../shared/utils/interfaces/LanguageOptions.enum";

export const GeneratePDF = () => {
  const { preferredLanguage } = useUI();
  return (
    <button style={{}}>
      📃
      {preferredLanguage === LanguageOptions.EN ? "Generate CV" : "Generar CV"}
    </button>
  );
};
