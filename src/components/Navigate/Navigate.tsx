import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { useSelector } from "../../store";
import SignInPage from "../../pages/SignInPage";
import BottomNavigation from "../BottomNavigation";
import PetPage from "../../pages/PetPage";
import { useTheme } from "react-native-paper";
import EditPetInfoPage from "../../pages/EditPetInfoPage";
import AddPet from "../../pages/AddPet";
import { fonts } from "../../theme";

const Stack = createNativeStackNavigator();

const Navigate = () => {
  const [fontsLoaded] = useFonts(fonts);
  const user = useSelector((state) => state.user.accessToken);
  const theme = useTheme();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen
              name="main"
              component={BottomNavigation}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Pet"
              component={PetPage}
              options={{
                headerTintColor: theme.colors.primary,
              }}
            />
            <Stack.Screen
              name="Edit pet"
              component={EditPetInfoPage}
              options={{
                headerTintColor: theme.colors.primary,
              }}
            />
            <Stack.Screen
              name="Pet page"
              component={PetPage}
              options={({ route }) => ({
                title: route.params.name,
                headerTintColor: theme.colors.primary,
                headerShown: false,
              })}
            />
            <Stack.Screen
              name="Add pet"
              component={AddPet}
              options={() => ({
                headerTintColor: theme.colors.primary,
              })}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="SignIn"
              component={SignInPage}
              options={{
                title: "",
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
