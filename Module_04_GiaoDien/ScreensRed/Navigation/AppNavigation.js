import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from '../screen/Screen1';
import Screen2 from '../screen/Screen2';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
                <Stack.Screen name='Screen1' component={Screen1} options={{headerShown:false}}/>
                <Stack.Screen name='Screen2' component={Screen2}  options={{headerShown:false}}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation