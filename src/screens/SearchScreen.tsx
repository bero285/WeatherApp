import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/FontAwesome';
import cloud from '../assets/cloudy.jpg';
import Weather from '../components/Weather';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../types/NavigationTypes';
import Search from '../components/Search';
import useDebounce from '../hooks/useDebaunce';

function SearchScreen(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp>();
  const [searchValue, setSearchValue] = useState<string>('');
  const onChangeText = (text: string) => {
    setSearchValue(text);
  };
  const debouncedSearchValue = useDebounce(searchValue, 500);
  const [weather, setWeather] = useState<any>([]);
  const fetchCities = async (keyword: string) => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/search.json?key=8f0c91bb205d4468a2a84301241607&q=${keyword}`,
      );
      const data = await response.json();

      setWeather(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchCities(debouncedSearchValue);
  }, [debouncedSearchValue]);
  return (
    <View style={styles.container}>
      <Image source={cloud} style={styles.image} />
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('weather')}>
          <MaterialIcons name="arrow-left" size={25} color="#89CFF0" />
        </TouchableOpacity>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.search}
            onChangeText={onChangeText}
            placeholder="Enter City"
            placeholderTextColor="#89CFF0"
          />
          <TouchableOpacity>
            <MaterialIcons name="search" size={20} color="#89CFF0" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchCardContainer}>
          {debouncedSearchValue.length < 3 ? (
            <Text style={styles.warningText}>
              Please enter at least 3 characters
            </Text>
          ) : weather?.length === 0 ? (
            <Text style={styles.warningText}>No data found</Text>
          ) : (
            <FlatList
              data={weather}
              renderItem={({item}) => <Search cities={item} />}
              keyExtractor={item => item.id}
              style={{width: '100%'}}
              contentContainerStyle={{gap: 10}}
            />
          )}
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
  searchContainer: {
    paddingTop: 50,
    paddingHorizontal: 25,
  },
  searchInputContainer: {
    paddingTop: 40,
    paddingHorizontal: 10,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  search: {
    // width: '100%',
    flex: 1,
    height: 35,
    borderWidth: 1,
    borderColor: '#89CFF0',
    paddingHorizontal: 10,
    color: '#89CFF0',
    borderRadius: 5,
  },
  searchCardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 30,
    gap: 15,
  },
  warningText: {
    color: 'red',
    fontSize: 16,
  },
});

export default SearchScreen;
