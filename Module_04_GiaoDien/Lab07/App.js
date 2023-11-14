import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen02 from './Screen/AddJob';
import GetStart from './Screen/GetStart';
import AddJob from './Screen/AddJob';
import AddJobYour from './Screen/AddJobYour';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Screen01' component={GetStart} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name='Screen02' component={AddJob} ></Stack.Screen>
        <Stack.Screen name='Screen03' component={AddJobYour} ></Stack.Screen>
        
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

