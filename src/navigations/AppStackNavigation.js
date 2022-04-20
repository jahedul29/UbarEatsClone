import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Restaurant from '../screens/Restaurant/index';
import DishDetailsScreen from '../screens/DishDetailsScreen/index';
import Busket from '../screens/Busket/index';
import Orders from '../screens/Orders/index';

const Stack = createNativeStackNavigator();

const AppStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => {
          return {
            headerShown: false,
          };
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="DishDetails" component={DishDetailsScreen} />
        <Stack.Screen name="Busket" component={Busket} />
        <Stack.Screen name="Orders" component={Orders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStackNavigation;
