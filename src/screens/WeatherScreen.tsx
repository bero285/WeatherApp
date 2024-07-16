import React, {useEffect, useState} from 'react';
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
function WeatherScreen({route}: any): React.JSX.Element {
  const navigation = useNavigation<NavigationProp>();
  // http://api.weatherapi.com/v1/current.json?key=8f0c91bb205d4468a2a84301241607&q=london
  const [weather, setWeather] = useState<any>(null);
  const fetchCity = async (city: string) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=8f0c91bb205d4468a2a84301241607&q=${city}&days=6`,
      );
      const data = await response.json();
      setWeather(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (route?.params?.city) {
      fetchCity(route.params.city);
    } else {
      fetchCity('london');
    }
  }, [route.params]);
  return (
    <View style={styles.container}>
      <Image source={cloud} style={styles.image} />
      <View style={styles.weatherContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('search')}>
          <MaterialIcons name="search" size={25} color="#89CFF0" />
        </TouchableOpacity>
        <View style={styles.weatherInfo}>
          <Text style={{fontSize: 24, color: '#89CFF0'}}>
            {weather?.location?.name}
          </Text>
          <Text style={{fontSize: 20, color: '#89CFF0'}}>
            {weather?.current?.temp_c}°
          </Text>
          <Text style={{fontSize: 16, color: '#89CFF0'}}>
            {weather?.current.condition.text}
          </Text>
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
              paddingVertical: 12,
              borderRadius: 10,
            }}>
            <MaterialIcons name="calendar-o" size={20} color="black" />
            <Text>6 - DAY FORCAST</Text>
          </View>
          <FlatList
            data={weather?.forecast?.forecastday}
            renderItem={({item}) => (
              <Weather weather={item} navigation={navigation} />
            )}
            keyExtractor={item => item.date}
            style={{width: '100%'}}
            contentContainerStyle={{gap: 10}}
          />
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
    paddingTop: 40,
    width: '100%',
    alignItems: 'center',
  },
  weatherCardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 60,
    gap: 25,
  },
});

export default WeatherScreen;
