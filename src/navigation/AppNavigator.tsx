import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WeatherScreen from '../screens/WeatherScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();
function AppNavigator(): React.JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="Weather"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="weather" component={WeatherScreen} />
      <Stack.Screen name="search" component={SearchScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
