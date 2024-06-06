import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

import PostImage from "../PostImage";
import { PostImageResponse } from "../../types";

interface LastFiveDaysImages {
  postImages: PostImageResponse[];
}

const LastFiveDaysImages: FC<LastFiveDaysImages> = ({ postImages }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>

      <View style={styles.postImagesContainer}>
        {postImages?.map((postImage) => (
          <PostImage
            key={postImage.title}
            title={postImage.title}
            date={postImage.date}
            url={postImage.url}
            explanation={postImage.explanation}
          />
        ))}
      </View>
    </View>
  );
};

export default LastFiveDaysImages;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 15,
  },
  postImagesContainer: {
    flexDirection: "column",
  },
});
