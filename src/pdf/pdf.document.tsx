import { Document, Page } from "@react-pdf/renderer";
import { PDFHeader } from "./components/PDFHeader.component";
import { PDFSkills } from "./components/PDFSkills.component";
import { PDFEducation } from "./components/PDFEducation.component";
import { PDFExperience } from "./components/PDFExperience.component";
import { PDFProject } from "./components/PDFProjects.component";
import type { SupportedLanguage } from "../shared/utils/interfaces/SupportedLanguage.type";

interface Language {
  preferredLanguage: SupportedLanguage;
}
export const PDFDocument = ({ preferredLanguage }: Language) => {
  return (
    <Document>
      <Page size="A4" style={{ padding: "30pt 30pt" }}>
        <PDFHeader preferredLanguage={preferredLanguage} />
        <PDFSkills preferredLanguage={preferredLanguage} />
        <PDFEducation preferredLanguage={preferredLanguage} />
        <PDFExperience preferredLanguage={preferredLanguage} />
      </Page>
      <Page size="A4" style={{ padding: "30pt 30pt" }}>
        <PDFProject preferredLanguage={preferredLanguage} />
      </Page>
    </Document>
  );
};
