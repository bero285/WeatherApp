import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type RootStackParamList = {
  search: undefined;
  weather: undefined;
  // Add other screens here
};
export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
