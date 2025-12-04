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
  name: {
    fontSize: "13pt",
    fontWeight: "600",
    marginBottom: "5pt",
  },
  techStack: {
    fontSize: "12pt",
    fontWeight: "600",
    color: SECUNDARY_FONT_COLOR,
    display: "flex",
    flexDirection: "row",
  },
  description: {
    marginTop: "5pt",
    fontSize: "10pt",
  },
});
export const PDFProject = ({ preferredLanguage }: Language) => {
  return (
    <View style={{ marginTop: "10pt" }}>
      <PDFSubtitle>
        {preferredLanguage === LanguageOptions.EN
          ? "Projects"
          : "Proyectos"}
      </PDFSubtitle>
      <View style={styles.skillContainer}>
        {CONTENT[preferredLanguage].projectList.map((p) => (
          <View>
            <Text style={styles.name}>{p.name}</Text>
            <View style={styles.techStack}>
              {p.techStack.map((t, i) =>
                !i ? <Text>{t} </Text> : <Text> | {t}</Text>,
              )}
            </View>
            ;<View></View>
            <Text style={styles.description}>{p.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
