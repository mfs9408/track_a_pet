import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "react-native-paper";
import { useFonts } from "expo-font";
import { useSelector } from "../../store";
import EditPetInfoPage from "../../pages/EditPetInfoPage";
import RemindersList from "../../pages/RemindersList";
import BottomNavigation from "../BottomNavigation";
import WelcomePage from "../../pages/WelcomePage";
import SignInPage from "../../pages/SignInPage";
import PetPage from "../../pages/PetPage";
import AddPet from "../../pages/AddPet";
import { RootStackParamList } from "../../types";
import { fonts } from "../../theme";
import { EPage } from "../../enums";
import CurrentRemindersPage from "../../pages/CurrentRemindersPage";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigate = () => {
  const [fontsLoaded] = useFonts(fonts);
  const user = useSelector((state) => state.user?.user);
  const theme = useTheme();

  // AsyncStorage.clear();

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
              name={EPage.ADD_PET}
              component={AddPet}
              options={() => ({
                title: "Add a pet",
                headerTintColor: theme.colors.primary,
              })}
            />
            <Stack.Screen
              name={EPage.REMINDERS_LIST}
              component={RemindersList}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={EPage.CURRENT_REMINDERS}
              component={CurrentRemindersPage}
              options={{
                title: "Current reminders",
                headerTintColor: theme.colors.primary,
              }}
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
              name={EPage.SIGN_IN}
              component={SignInPage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={EPage.SIGN_UP}
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
