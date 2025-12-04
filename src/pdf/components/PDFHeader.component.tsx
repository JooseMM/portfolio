import { Text, StyleSheet, View, Link } from "@react-pdf/renderer";
import { CONTENT } from "../../shared/utils/context/content.utils";
import { LanguageOptions } from "../../shared/utils/interfaces/LanguageOptions.enum";
import { LINKS_COLOR, type Language } from "./PDFUtils";

export const styles = StyleSheet.create({
  container: {
    textAlign: "center",
  },
  primaryTitle: {
    fontSize: "20pt",
    marginBottom: "5pt",
    fontWeight: 600,
  },
  secundaryTitle: {
    fontSize: "15pt",
    marginBottom: "5pt",
  },
  contactContainer: {
    marginTop: "2pt",
    display: "flex",
    flexDirection: "row",
    gap: "10pt",
    justifyContent: "center",
    fontSize: "12pt",
    fontWeight: "600",
  },
  resume: {
    marginTop: "5pt",
    fontSize: "10pt",
  },
});

export const PDFHeader = ({ preferredLanguage }: Language) => {
  return (
    <View style={styles.container}>
      <Text style={styles.primaryTitle}>Jose Moreno</Text>
      <Text style={styles.secundaryTitle}>
        {preferredLanguage === LanguageOptions.EN
          ? "Full-Stack Web Developer"
          : "Desarrollador Web Full-Stack"}
      </Text>
      <View style={styles.contactContainer}>
        {CONTENT[LanguageOptions.EN].contactInfo.map((c) => {
          switch (c.name) {
            case "Github":
              return (
                <Link style={{ color: LINKS_COLOR }} src={window.location.href}>
                  {preferredLanguage === LanguageOptions.EN
                    ? "Portfolio"
                    : "Portafolio"}
                </Link>
              );
            case "LinkedIn":
              return (
                <Link style={{ color: LINKS_COLOR }} src={c.link}>
                  {c.name}
                </Link>
              );
            default:
              return <Text>{c.visible}</Text>;
          }
        })}
      </View>
      <Text style={styles.resume}>
        {preferredLanguage === LanguageOptions.EN
          ? "Web developer with experience in creating interactive dashboards, landing pages, and APIs."
          : "Desarrollador web con experiencia en la creación de dashboards interactivos, landing pages y APIs."}
      </Text>
    </View>
  );
};
