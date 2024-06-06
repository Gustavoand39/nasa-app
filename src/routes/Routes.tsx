import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../views/Home";
import Details from "../views/Details";
import { RootStackParams } from "../types";
import { Image, StyleSheet } from "react-native";

const Stack = createStackNavigator<RootStackParams>();

const RouteScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: "rgba(7, 26, 93, 255)",
  },
  headerTintColor: "#fff",
  headerBackTitleStyle: {
    fontSize: 18,
  },
  headerRight: () => (
    <Image source={require("../assets/nasa-logo.png")} style={styles.image} />
  ),
};

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={RouteScreenDefaultOptions}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={RouteScreenDefaultOptions}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
