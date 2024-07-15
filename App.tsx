import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import WeatherScreen from './src/screens/WeatherScreen';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
function App(): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <View style={{width: '100%', flex: 1}}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
