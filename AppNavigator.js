
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screens/MainScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (

      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>

  );
};

export default AppNavigator;


