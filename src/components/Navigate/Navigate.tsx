import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { useSelector } from "../../store";
import CurrentRemindersPage from "../../pages/CurrentRemindersPage";
import CreateReminderPage from "../../pages/CreateReminderPage";
import RemindersListPage from "../../pages/RemindersListPage";
import ChangeProfilePage from "../../pages/ChangeProfilePage";
import BottomNavigation from "../BottomNavigation";
import WelcomePage from "../../pages/WelcomePage";
import SuccessPage from "../../pages/SuccessPage";
import SignInPage from "../../pages/SignInPage";
import PetPage from "../../pages/PetPage";
import AddPet from "../../pages/AddPet";
import { RootStackParamList } from "../../types";
import { commonColors, fonts } from "../../theme";
import { EPage } from "../../enums";
import AppointmentList from "../../pages/AppointmentsList";
import CreateAppointmentPage from "../../pages/CreateAppointmentPage";
import AbuseInformationPage from "../../pages/AbuseInformationPage";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigate = () => {
  const [fontsLoaded] = useFonts(fonts);
  const user = useSelector((state) => state.user?.user);

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
              name={EPage.PET}
              component={PetPage}
              options={({ route }) => ({
                title: route.params.petId,
                headerTintColor: commonColors.primary.color,
                headerShown: false,
              })}
            />
            <Stack.Screen
              name={EPage.ADD_PET}
              component={AddPet}
              options={() => ({
                title: "Add a pet",
                headerTintColor: commonColors.primary.color,
              })}
            />
            <Stack.Screen
              name={EPage.REMINDERS_LIST}
              component={RemindersListPage}
              options={{
                title: "",
                headerTintColor: commonColors.primary.color,
              }}
            />
            <Stack.Screen
              name={EPage.CURRENT_REMINDERS}
              component={CurrentRemindersPage}
              options={{
                title: "",
                headerTintColor: commonColors.primary.color,
              }}
            />
            <Stack.Screen
              name={EPage.CREATE_REMINDER}
              component={CreateReminderPage}
              options={{
                title: "",
                headerTintColor: commonColors.primary.color,
              }}
            />
            <Stack.Screen
              name={EPage.SUCCESS_PAGE}
              component={SuccessPage}
              options={{
                title: "",
                headerBackVisible: false,
                headerStyle: {
                  backgroundColor: commonColors.primary.color,
                },
              }}
            />
            <Stack.Screen
              name={EPage.CHANGE_PROFILE_PAGE}
              component={ChangeProfilePage}
              options={{
                title: "Edit your profile",
                headerTintColor: commonColors.primary.color,
              }}
            />
            <Stack.Screen
              name={EPage.APPOINTMENT_LIST}
              component={AppointmentList}
              options={{
                title: "",
                headerTintColor: commonColors.primary.color,
              }}
            />
            <Stack.Screen
              name={EPage.CREATE_APPOINTMENT}
              component={CreateAppointmentPage}
              options={{
                title: "",
                headerTintColor: commonColors.primary.color,
              }}
            />
            <Stack.Screen
              name={EPage.ABUSE_INFORMATION}
              component={AbuseInformationPage}
              options={{
                title: "",
                headerTintColor: commonColors.primary.color,
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
