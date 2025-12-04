import { View, Text } from "@react-pdf/renderer";

export const PDFSubtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <View
      style={{
        fontSize: "14pt",
        fontWeight: "550",
        paddingBottom: "5pt",
        borderBottomWidth: 1,
        borderBottomColor: "black",
        borderBottomStyle: "solid",
      }}
    >
      <Text style={{ marginLeft: "10pt" }}>{children}</Text>
    </View>
  );
};
