import React from 'react';
import MainPage from '../pages/MainPage';
import SignInPage from '../pages/SignInPage';
import { useSelector } from '../store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const user = useSelector((state) => state.user.accessToken);

  return (
    <Stack.Navigator>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={TabNavigator} />
        <Tab.Screen name="My pets" component={TabNavigator} />
      </Tab.Navigator>
    </Stack.Navigator>
  );
};

export default TabNavigator;
