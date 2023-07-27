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
import WelcomePage from "../../pages/WelcomePage";
import { RootStackParamList } from "../../types";
import AddPet from "../../pages/AddPet";
import { fonts } from "../../theme";
import { EPage } from "../../enums";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigate = () => {
  const [fontsLoaded] = useFonts(fonts);
  const user = useSelector((state) => state.user?.user);
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
              name={EPage.MAIN}
              component={BottomNavigation}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={EPage.EDIT}
              component={EditPetInfoPage}
              options={{
                headerTintColor: theme.colors.primary,
              }}
            />
            <Stack.Screen
              name={EPage.PET}
              component={PetPage}
              options={({ route }) => ({
                title: route.params.petId,
                headerTintColor: theme.colors.primary,
                headerShown: false,
              })}
            />
            <Stack.Screen
              name={EPage.ADDPET}
              component={AddPet}
              options={() => ({
                title: "Add a pet",
                headerTintColor: theme.colors.primary,
              })}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name={EPage.WELCOME}
              component={WelcomePage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={EPage.SIGNIN}
              component={SignInPage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={EPage.SIGNUP}
              component={SignInPage}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
