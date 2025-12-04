import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { PDFSubtitle } from "./PDFSubtitle.component";
import type { Language } from "./PDFUtils";
import { LanguageOptions } from "../../shared/utils/interfaces/LanguageOptions.enum";
import { CONTENT } from "../../shared/utils/context/content.utils";
import { useState } from "react";

export const styles = StyleSheet.create({
  skillContainer: {
   paddingVertical: '15pt',
    display: "flex",
    flexDirection: 'row',
    columnGap: '50pt',
    marginLeft: '20pt'
  },
  skillColumn: {
    fontSize: "12pt",
    fontWeight: '550',
    display: "flex",
    flexDirection: "column",
    rowGap: "4pt",
  },
});
export const PDFSkills = ({ preferredLanguage }: Language) => {
  const [row] = useState([
    CONTENT[preferredLanguage].skills.slice(0, 5),
    CONTENT[preferredLanguage].skills.slice(5, 10),
    CONTENT[preferredLanguage].skills.slice(10),
  ]);

  return (
    <View style={{ marginTop: "12pt" }}>
      <PDFSubtitle>
        {preferredLanguage === LanguageOptions.EN ? "Skills" : "Habilidades"}
      </PDFSubtitle>
      <View style={styles.skillContainer}>
        <View style={styles.skillColumn}>
          {row[0].map((s) => (
            <Text key={s}>•  {s}</Text>
          ))}
        </View>
        <View style={styles.skillColumn}>
          {row[1].map((s) => (
            <Text key={s}>•  {s}</Text>
          ))}
        </View>
        <View style={styles.skillColumn}>
          {row[2].map((s) => (
            <Text key={s}>•  {s}</Text>
          ))}
        </View>
      </View>
    </View>
  );
};
