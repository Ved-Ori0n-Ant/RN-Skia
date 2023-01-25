import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AxiosTut from './AxiosScreen';
import RootScreen from '../src/screens/RootScreen';
import NewsFetch from './newsByFetch';
import NewsAxios from './newsByAxios';

const Stack = createNativeStackNavigator();

const AxiosMain: any = () => {
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='RoutOrigin' component={RootScreen} />
            <Stack.Screen name='Call API' component={AxiosTut} />
            <Stack.Screen name='News using FETCH' component={NewsFetch} />
            <Stack.Screen name='News using AXIOS' component={NewsAxios} /> 
        </Stack.Navigator>
    </NavigationContainer>
}

export default AxiosMain;