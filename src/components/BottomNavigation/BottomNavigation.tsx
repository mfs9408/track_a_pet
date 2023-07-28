import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import MainPage from "../../pages/MainPage";
import { useTheme } from "react-native-paper";
import MyPetsPage from "../../pages/MyPetsPage";
import LibraryPage from "../../pages/LibraryPage";
import ProfilePage from "../../pages/ProfilePage";
import { EPage } from "../../enums";
import { commonColors } from "../../theme";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={EPage.HOME}
        component={MainPage}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarInactiveTintColor: commonColors.lightPrimary.color,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="home"
              color={focused ? color : commonColors.lightPrimary.color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name={EPage.MY_PETS}
        component={MyPetsPage}
        options={{
          headerShown: false,
          tabBarLabel: "My pets",
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
        name={EPage.LIBRARY}
        component={LibraryPage}
        options={{
          headerShown: false,
          tabBarLabel: "Library",
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
        name={EPage.PROFILE}
        component={ProfilePage}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
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
