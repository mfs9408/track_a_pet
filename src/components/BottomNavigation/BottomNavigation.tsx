import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import MainPage from "../../pages/MainPage";
import { useTheme } from "react-native-paper";
import MyPetsPage from "../../pages/MyPetsPage";
import LibraryPage from "../../pages/LibraryPage";
import ProfilePage from "../../pages/ProfilePage";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={MainPage}
        options={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="home"
              color={focused ? color : "#c0b7e3"}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My pets"
        component={MyPetsPage}
        options={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="pets"
              color={focused ? color : "#c0b7e3"}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryPage}
        options={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="local-library"
              color={focused ? color : "#c0b7e3"}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name="profile"
              color={focused ? color : "#c0b7e3"}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
