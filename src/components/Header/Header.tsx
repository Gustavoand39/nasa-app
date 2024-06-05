import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Header = (): JSX.Element => {
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
