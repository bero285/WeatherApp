import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type RootStackParamList = {
  search: undefined;
  weather: {city?: string} | undefined;
  // Add other screens here
};
export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
