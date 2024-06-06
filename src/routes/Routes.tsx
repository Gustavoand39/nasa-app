import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../views/Home";
import Details from "../views/Details";
import { RootStackParams } from "../types";

const Stack = createStackNavigator<RootStackParams>();

const RouteScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: "rgba(7, 26, 93, 255)",
  },
  headerTitleStyle: {
    color: "#fff",
  },
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
