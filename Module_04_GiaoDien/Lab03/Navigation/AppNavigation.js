import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../screen/Login";

import HomeScreen from "../screen/HomeScreen";
import USB from "../screen/USB";
import PassWord from "../screen/PassWord";
import ortherBook from "../screen/ortherBook";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
         
        />
        <Stack.Screen
          name="USB"
          component={USB}
         
        />
         <Stack.Screen
          name="PassWord"
          component={PassWord}
         
        />
         <Stack.Screen
          name="ortherBook"
          component={ortherBook}
         
        />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
