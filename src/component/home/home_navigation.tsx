import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '.';
import React from 'react';
import {Demo} from '../demo';
import {DemoRedux} from '../demo_redux';
export const HomeNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen name="DemoRedux" component={DemoRedux} />
      </Stack.Navigator>
    </>
  );
};
