import React from "react";
import { View, Text } from 'react-native'
import FilterScreen from "./photoFilter";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootScreen from "./RootScreen";
import SkiaScreen from "./SkiaTutorial";
import CardScreen from "./CardScreen";
import MorphingCircle from "./morphingCircle";

const Stack = createNativeStackNavigator();

const Main : any = () => {
  return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='Root' component={RootScreen} />
          <Stack.Screen name='Tutorial' component={SkiaScreen} />
          <Stack.Screen name='Filter' component={FilterScreen} />
          <Stack.Screen name='AnimatedCard' component={CardScreen} />
          <Stack.Screen name='AnimatedCircle' component={MorphingCircle} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default Main;