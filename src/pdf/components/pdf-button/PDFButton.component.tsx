import "./PDFButton.styles.css";
import { useUI } from "../../../shared/utils/context/hook.context";
import { LanguageOptions } from "../../../shared/utils/interfaces/LanguageOptions.enum";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFDocument } from "../../pdf.document";
import { useState } from "react";
import PDFIcon from "../../../assets/pdf-icon.svg";
import Spinner from "../../../assets/spinner.svg";

export const PDFButton = () => {
  const { preferredLanguage } = useUI();
  const [label] = useState(
    preferredLanguage === LanguageOptions.EN ? "Download CV" : "Descargar CV",
  );
  return (
    <PDFDownloadLink
      className="button--pdf"
      document={<PDFDocument preferredLanguage={preferredLanguage} />}
      fileName="dev-jose-moreno.pdf"
    >
      {({ loading }) =>
        loading ? (
          <img src={Spinner} className="spinner" />
        ) : (
          <>
            <img src={PDFIcon} />
            <p>{label}</p>
          </>
        )
      }
    </PDFDownloadLink>
  );
};
