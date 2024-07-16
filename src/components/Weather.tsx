import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';

function Weather({weather}: any): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.part}>
        <Text>{weather.day.condition.text}</Text>
        {/* <Ionicons name="cloud" size={20} color="#89CFF0" /> */}
        <Image
          source={{uri: `https:${weather?.day?.condition?.icon}`}}
          style={{width: 30, height: 30}}
        />
      </View>
      <View style={styles.part}>
        <Text>{weather.date}</Text>
        <Text>{weather.day.avgtemp_c}°</Text>
      </View>
    </View>
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
