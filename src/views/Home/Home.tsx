import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import Header from "../../components/Header";
import TodayImage from "../../components/TodayImage";
import fetchData from "../../utils/fetch";
import { PostImageResponse } from "../../types";

const Home = () => {
  const [todayImage, setTodayImage] = useState<PostImageResponse>(
    {} as PostImageResponse
  );

  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todayImageResponse = await fetchData();
        setTodayImage(todayImageResponse);
      } catch (error) {
        console.error("Error loading today's image", error);
        setTodayImage({} as PostImageResponse);
      }
    };

    loadTodayImage().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />

      <TodayImage {...todayImage} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
