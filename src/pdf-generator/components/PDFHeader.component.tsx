import { Text, StyleSheet, View } from "@react-pdf/renderer";
import { subtitle } from "./PDFUtils";

export const headerStyles = StyleSheet.create({
  container: {
    marginTop: "30pt",
    marginBottom: "30pt",
    textAlign: "center",
  },
  primaryTitle: {
    fontSize: "30pt",
    marginBottom: "5pt",
    fontWeight: 600,
  },
  secundaryTitle: {
    fontSize: "20pt",
    marginBottom: "5pt",
  },
  contactContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export const PDFHeader = () => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.primaryTitle}>Jose Moreno</Text>
      <Text style={headerStyles.secundaryTitle}>
        Desarrollador Web Full Stack
      </Text>
      <View style={headerStyles.contactContainer}>

      </View>
    </View>
  );
};
