import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeCricle from './HomeCricle'
import SelectCricle from './SelectCricle'
import BuyCricle from './BuyCricle'

const StackNaviagtion = () => {
    const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <stack.Navigator>
           
            <stack.Screen name='HomeCricle' component={HomeCricle} options={{headerShown:false}}/>
            <stack.Screen name='SelectCricle' component={SelectCricle} />
            <stack.Screen name='BuyCricle' component={BuyCricle} />

        </stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNaviagtion