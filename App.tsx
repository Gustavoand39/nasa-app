import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Platform, View } from "react-native";

import Routes from "./src/routes/Routes";

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={
          Platform.OS === "android"
            ? styles.androidSafeArea
            : styles.otherPlatforms
        }
      >
        <Routes />
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7, 26, 93, 255)",
  },
  androidSafeArea: {
    flex: 1,
    marginTop: 30,
  },
  otherPlatforms: {},
});
