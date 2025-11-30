import { PDFViewer, Document, Page } from "@react-pdf/renderer";
import { PDFHeader } from "./components/PDFHeader.component";

export const PDFGenerator = () => {
  return (
    <main>
      <PDFViewer width="100%" height="100%">
        <Document>
          <Page>
            <PDFHeader />
          </Page>
        </Document>
      </PDFViewer>
    </main>
  );
};
