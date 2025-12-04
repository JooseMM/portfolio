import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { PDFSubtitle } from "./PDFSubtitle.component";
import { SECUNDARY_FONT_COLOR, type Language } from "./PDFUtils";
import { LanguageOptions } from "../../shared/utils/interfaces/LanguageOptions.enum";
import { CONTENT } from "../../shared/utils/context/content.utils";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: "15pt",
    display: "flex",
    justifyContent: "center",
    rowGap: "5pt",
    fontSize: "12pt",
    fontWeight: '550',
    marginLeft: "20pt",
    color: SECUNDARY_FONT_COLOR,
  },
});
export const PDFEducation = ({ preferredLanguage }: Language) => {
  return (
    <View style={{ marginTop: "10pt" }}>
      <PDFSubtitle>
        {preferredLanguage === LanguageOptions.EN ? "Education" : "Educación"}
      </PDFSubtitle>
      <View style={styles.container}>
        {CONTENT[preferredLanguage].education.map((e) => (
          <Text>• {e}</Text>
        ))}
      </View>
    </View>
  );
};
