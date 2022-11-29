import React from "react";
import { View, Text } from 'react-native'
import FilterScreen from "./src/screens/photoFilter";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootScreen from "./src/screens/RootScreen";
import SkiaScreen from "./src/screens/SkiaTutorial";
import CardScreen from "./src/screens/CardScreen";

const Stack = createNativeStackNavigator();

const App : any = () => {
  return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Root' component={RootScreen} />
          <Stack.Screen name='Filter' component={FilterScreen} />
          <Stack.Screen name='Tutorial' component={SkiaScreen} />
          <Stack.Screen name='AnimatedCard' component={CardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;