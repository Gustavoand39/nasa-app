import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View>
      <View>
        <Text>Explore</Text>
      </View>

      <View>
        <Image
          style={styles.image}
          source={require("../../assets/nasa-logo.png")}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
