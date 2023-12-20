import react from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import backgroundImage from "../assets/Certificate.png";

const styles = StyleSheet.create({
  page: {},

  PDFViewer: {
    width: "100%",
    height: "100vh",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },

  section: {
    fontSize: "30",
    textAlign: "center",
    margin: 0,
    color: "rgb(69, 115, 224)",
    width: "100%",
    height: "100%",
  },
  nametext: {
    marginTop: 190,
    marginBottom: 40,
  },
  scoretext: {},
});

const Certificat = ({ name, score }) => {
  return (
    <PDFViewer style={styles.PDFViewer} styles={styles.PDFViewer}>
      <Document title="Certificat">
        <Page orientation="landscape" size="A5" style={styles.page}>
          <View style={styles.section}>
            <Image src={backgroundImage} style={styles.backgroundImage} />
            <Text style={styles.nametext}>{name}</Text>
            <Text styles={styles.scoretext}>{score} </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Certificat;
