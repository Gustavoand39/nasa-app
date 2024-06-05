import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Platform, View } from "react-native";
import Home from "./src/views/Home";

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
        <Home />
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
