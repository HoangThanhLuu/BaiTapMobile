import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import WelcomeHome from './WelcomeHome';
import AddHome from './AddHome';

const StackNavigation = () => {
    const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name='WelcomeHome' component={WelcomeHome} options={{headerShown:false}}></stack.Screen>
            <stack.Screen name='AddHome' component={AddHome} options={{headerShown:false}}></stack.Screen>

        </stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation