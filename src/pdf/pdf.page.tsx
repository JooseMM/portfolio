import { PDFViewer } from "@react-pdf/renderer";
import { PDFDocument } from "./pdf.document";
import { useUI } from "../shared/utils/context/hook.context";

export const PDFGenerator = () => {
  const { preferredLanguage } = useUI();
  return (
    <main style={{ height: "100%" }}>
      <PDFViewer style={{ height: "40rem" }} width="100%" height="100%">
        <PDFDocument preferredLanguage={preferredLanguage} />
      </PDFViewer>
    </main>
  );
};
