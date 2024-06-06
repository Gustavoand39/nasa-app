import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { format, sub } from "date-fns";

import Header from "../../components/Header";
import LastFiveDaysImages from "../../components/LastFiveDaysImages";
import TodayImage from "../../components/TodayImage";
import fetchData from "../../utils/fetch";
import { PostImageResponse } from "../../types";

const Home = () => {
  const [todayImage, setTodayImage] = useState<PostImageResponse>({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<
    PostImageResponse[]
  >([]);

  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todayImageResponse = await fetchData();
        setTodayImage(todayImageResponse);
      } catch (error) {
        console.error("Error loading today's image", error);
        setTodayImage({});
      }
    };

    const loadLast5DaysImages = async () => {
      try {
        const date = new Date();
        const todayDate = format(date, "yyyy-MM-dd");
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd");

        const lastFiveDaysImagesResponse = await fetchData(
          `&start_date=${fiveDaysAgoDate}&end_date=${todayDate}`
        );

        setLastFiveDaysImages(lastFiveDaysImagesResponse);
      } catch (error) {
        console.error("Error loading last five images", error);
        setLastFiveDaysImages([]);
      }
    };

    loadTodayImage().catch(null);
    loadLast5DaysImages().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView>
        <TodayImage {...todayImage} />

        <LastFiveDaysImages postImages={lastFiveDaysImages} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7, 26, 93, 255)",
  },
});
