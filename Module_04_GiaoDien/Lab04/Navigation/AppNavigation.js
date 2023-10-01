import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screen/Login';
import Shoppe from '../screen/Shoppe';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
                <Stack.Screen name='Shoppe' component={Shoppe} options={{headerShown:false}}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation