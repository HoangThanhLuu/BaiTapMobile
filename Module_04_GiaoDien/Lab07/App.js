import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStated from './Screen/GetStated';
import Home from './Screen/Home'
import UpdateandAdd from './Screen/UpdateandAdd';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='GetStarted' component={GetStated} options={{headerShown: false}} />
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
        <Stack.Screen name='Add' component={UpdateandAdd} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});