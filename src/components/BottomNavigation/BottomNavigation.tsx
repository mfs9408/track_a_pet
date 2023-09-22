import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import MainPage from "../../pages/MainPage";
import MyPetsPage from "../../pages/MyPetsPage";
import LibraryPage from "../../pages/LibraryPage";
import ProfilePage from "../../pages/ProfilePage";
import { commonColors } from "../../theme";
import { EPage } from "../../enums";
import { useSelector } from "../../store";
import Map from "../../pages/Map";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const isLoading = useSelector((state) => state.commonData.isLoading);

  return (
    <Tab.Navigator initialRouteName={EPage.MAIN}>
      <Tab.Screen
        name={EPage.HOME}
        component={MainPage}
        listeners={{
          tabPress: (e) => {
            isLoading && e.preventDefault();
          },
        }}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarInactiveTintColor: commonColors.lightPrimary.color,
          tabBarActiveTintColor: !isLoading
            ? commonColors.primary.color
            : commonColors.lightPrimary.color,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="home"
              color={
                focused && !isLoading ? color : commonColors.lightPrimary.color
              }
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name={EPage.MY_PETS}
        component={MyPetsPage}
        listeners={{
          tabPress: (e) => {
            isLoading && e.preventDefault();
          },
        }}
        options={{
          headerShown: false,
          tabBarLabel: "My pets",
          tabBarActiveTintColor: commonColors.primary.color,
          tabBarInactiveTintColor: commonColors.lightPrimary.color,
          headerStyle: {
            backgroundColor: commonColors.background.backgroundColor,
          },
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="pets"
              color={focused ? color : commonColors.lightPrimary.color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name={EPage.LIBRARY}
        component={LibraryPage}
        listeners={{
          tabPress: (e) => {
            isLoading && e.preventDefault();
          },
        }}
        options={{
          headerShown: false,
          tabBarLabel: "Library",
          tabBarActiveTintColor: commonColors.primary.color,
          tabBarInactiveTintColor: commonColors.lightPrimary.color,
          headerStyle: {
            backgroundColor: commonColors.background.backgroundColor,
          },
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="local-library"
              color={focused ? color : commonColors.lightPrimary.color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name={EPage.MAP}
        component={Map}
        listeners={{
          tabPress: (e) => {
            isLoading && e.preventDefault();
          },
        }}
        options={{
          title: "Map of pets",
          tabBarLabel: "Map",
          tabBarActiveTintColor: commonColors.primary.color,
          tabBarInactiveTintColor: commonColors.lightPrimary.color,
          headerStyle: {
            backgroundColor: commonColors.background.backgroundColor,
          },
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="map"
              color={focused ? color : commonColors.lightPrimary.color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name={EPage.PROFILE}
        component={ProfilePage}
        listeners={{
          tabPress: (e) => {
            isLoading && e.preventDefault();
          },
        }}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarActiveTintColor: commonColors.primary.color,
          tabBarInactiveTintColor: commonColors.lightPrimary.color,
          headerStyle: {
            backgroundColor: commonColors.background.backgroundColor,
          },
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name="profile"
              color={focused ? color : commonColors.lightPrimary.color}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
