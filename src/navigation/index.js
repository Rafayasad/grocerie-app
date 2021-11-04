import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sell from '../Sell';
import Size from '../Size';
import Prize from '../Prize';

const Stack = createNativeStackNavigator();

export default function MainNavigator () {
    return <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Sell" component={Sell} options={{headerTitleAlign:"center" , headerTintColor:"blue"}}/>
          <Stack.Screen name="Size" component={Size} options={{headerTitleAlign:"center" , headerTintColor:"blue"}}/>
          <Stack.Screen name="Prize" component={Prize} options={{headerTitleAlign:"center" , headerTintColor:"blue"}}/>
        </Stack.Navigator>
      </NavigationContainer>
  }