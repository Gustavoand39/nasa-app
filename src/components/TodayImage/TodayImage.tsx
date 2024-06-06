import React, { FC } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { PostImageResponse, RootStackParams } from "../../types";

type PostImageNavigationProps = StackNavigationProp<RootStackParams, "Details">;

const TodayImage: FC<PostImageResponse> = ({
  date,
  title,
  url,
  explanation,
}): JSX.Element => {
  const { navigate } = useNavigation<PostImageNavigationProps>();

  const handleMorePress = () => {
    navigate("Details", { title, date, url, explanation });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: url }} style={styles.image} />
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleMorePress}>
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodayImage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    borderRadius: 16,
    flexDirection: "column",
    gap: 12,
    margin: 16,
    padding: 16,
  },
  imageContainer: {
    borderColor: "rgba(255, 255, 255, 0.8)",
    borderWidth: 2,
    borderRadius: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    objectFit: "cover",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "80%",
    backgroundColor: "#4CAF50",
    alignItems: "center",
    borderRadius: 5,
    padding: 8,
    margin: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
