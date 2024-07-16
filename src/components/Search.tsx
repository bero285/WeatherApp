import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import {NavigationProp} from '../types/NavigationTypes';

function Weather({cities}: any): React.JSX.Element {
  const navigation = useNavigation<NavigationProp>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('weather', {city: cities.name})}>
      <View style={styles.part}>
        <Text>{cities.name}</Text>
        <Ionicons name="cloud" size={20} color="#89CFF0" />
      </View>
      <View style={styles.part}>
        <Text>{cities.region}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 10,
    backgroundColor: 'lightgray',
    gap: 5,
    paddingVertical: 5,
    borderRadius: 10,
  },
  part: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Weather;
