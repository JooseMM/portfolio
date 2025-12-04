import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { PDFSubtitle } from "./PDFSubtitle.component";
import { SECUNDARY_FONT_COLOR, type Language } from "./PDFUtils";
import { LanguageOptions } from "../../shared/utils/interfaces/LanguageOptions.enum";
import { CONTENT } from "../../shared/utils/context/content.utils";

export const styles = StyleSheet.create({
  skillContainer: {
    paddingVertical: "15pt",
    display: "flex",
    justifyContent: "center",
    rowGap: "10pt",
    fontSize: "10pt",
  },
  company: {
    fontSize: "13pt",
    fontWeight: "600",
    marginBottom: "5pt",
  },
  roleAndTime: {
    fontSize: "12pt",
    fontWeight: "600",
    color: SECUNDARY_FONT_COLOR,
  },
  description: {
    marginTop: "5pt",
    fontSize: "10pt",
  },
});
export const PDFExperience = ({ preferredLanguage }: Language) => {
  return (
    <View style={{ marginTop: "10pt" }}>
      <PDFSubtitle>
        {preferredLanguage === LanguageOptions.EN
          ? "Experience"
          : "Experiencia"}
      </PDFSubtitle>
      <View style={styles.skillContainer}>
        {CONTENT[preferredLanguage].experienceList.map((e) => (
          <View>
            <Text style={styles.company}>{e.companyName}</Text>
            <Text style={styles.roleAndTime}>
              {e.role} | {e.from} {e.until && `- ${e.until}`}
            </Text>
            <Text style={styles.description}>{e.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
