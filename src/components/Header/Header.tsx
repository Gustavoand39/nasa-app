import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import fetchData from "../../utils/fetch";

const Header = (): JSX.Element => {
  const [todayImage, setTodayImage] = useState(null);

  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todayImageResponse = await fetchData();
        setTodayImage(todayImageResponse);
      } catch (error) {
        console.error("Error loading today's image", error);
        setTodayImage(null);
      }
    };

    loadTodayImage().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>

      <View style={styles.rightContainer}>
        <Image
          source={require("../../assets/nasa-logo.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 12,
  },
  leftContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 50,
  },
});
