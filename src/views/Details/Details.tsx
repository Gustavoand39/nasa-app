import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";

import { RootStackParams } from "../../types";
import isImage from "../../utils/isImage";

const Details = () => {
  const {
    params: { title, url, explanation, date },
  } = useRoute<NativeStackScreenProps<RootStackParams, "Details">["route"]>();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{
            uri: isImage(url)
              ? url
              : "https://th.bing.com/th/id/OIP.szckS5xAN20d1IIonPyf-gHaHa?rs=1&pid=ImgDetMain",
          }}
          style={styles.image}
        />

        <ScrollView style={styles.scrollContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>

          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7, 26, 93, 255)",
  },
  content: {
    flex: 1,
    margin: 16,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
  scrollContent: {
    flex: 1,
    flexDirection: "column",
    marginTop: 15,
    padding: 15,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  date: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 16,
    marginBottom: 10,
  },
  explanation: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 18,
    lineHeight: 25,
    textAlign: "justify",
    marginBottom: 40,
  },
});
