import React, { FC } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { PostImageResponse, RootStackParams } from "../../types";

type PostImageNavigationProps = StackNavigationProp<RootStackParams, "Details">;

const PostImage: FC<PostImageResponse> = ({
  title,
  date,
  url,
  explanation,
}): JSX.Element => {
  const { navigate } = useNavigation<PostImageNavigationProps>();

  const isImage = (url?: string): boolean =>
    /\.(jpeg|jpg|gif|png)$/.test(url || "");

  const handleCardPress = () => {
    navigate("Details", { title, date, url, explanation });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={handleCardPress}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: isImage(url)
                ? url
                : "https://th.bing.com/th/id/OIP.szckS5xAN20d1IIonPyf-gHaHa?rs=1&pid=ImgDetMain",
            }}
            style={styles.image}
          />
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.postTitle}>{title}</Text>
          <Text style={styles.postDate}>{date}</Text>
          <Text style={styles.postViewMore}>View More</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PostImage;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(18, 39, 113, 255)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    marginBottom: 12,
  },
  touchableContainer: {
    flexDirection: "row",
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  dataContainer: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-evenly",
    gap: 3,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  image: {
    width: "100%",
    height: 100,
    objectFit: "cover",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  postTitle: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  postDate: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 12,
    textAlign: "center",
  },
  postViewMore: {
    color: "rgba(255, 255, 255, 0.4)",
    fontSize: 10,
    textAlign: "right",
  },
});
