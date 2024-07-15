import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/FontAwesome';
import cloud from '../assets/cloudy.jpg';
import Weather from '../components/Weather';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../types/NavigationTypes';
function WeatherScreen({}): React.JSX.Element {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.container}>
      <Image source={cloud} style={styles.image} />
      <View style={styles.weatherContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('search')}>
          <MaterialIcons name="search" size={25} color="#89CFF0" />
        </TouchableOpacity>
        <View style={styles.weatherInfo}>
          <Text style={{fontSize: 24, color: '#89CFF0'}}>
            Manchester,London
          </Text>
          <Text style={{fontSize: 20, color: '#89CFF0'}}>25°</Text>
          <Text style={{fontSize: 16, color: '#89CFF0'}}>Scattered Cloud</Text>
        </View>
        <View style={styles.weatherCardContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              backgroundColor: 'lightgray',
              width: '100%',
              paddingHorizontal: 14,
              paddingVertical: 9,
              borderRadius: 10,
            }}>
            <MaterialIcons name="calendar-o" size={20} color="black" />
            <Text>6 - DAY FORCAST</Text>
          </View>
          <Weather />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.8,
  },
  weatherContainer: {
    paddingTop: 50,
    paddingHorizontal: 25,
  },
  weatherInfo: {
    paddingTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  weatherCardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 30,
    gap: 15,
  },
});

export default WeatherScreen;
