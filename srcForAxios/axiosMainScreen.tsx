import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AxiosTut from './AxiosScreen';
import RootScreen from '../src/screens/RootScreen';

const Stack = createNativeStackNavigator();

const AxiosMain: any = () => {
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Root' component={RootScreen} />
            <Stack.Screen name='Call API' component={AxiosTut} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default AxiosMain;