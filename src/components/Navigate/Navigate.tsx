import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import packageJson from "../../../package.json";
import { useSelector } from "../../store";
import CurrentRemindersPage from "../../pages/CurrentRemindersPage";
import CreateReminderPage from "../../pages/CreateReminderPage";
import RemindersListPage from "../../pages/RemindersListPage";
import ChangeProfilePage from "../../pages/ChangeProfilePage";
import BottomNavigation from "../BottomNavigation";
import WelcomePage from "../../pages/WelcomePage";
import SuccessPage from "../../pages/SuccessPage";
import SignInPage from "../../pages/SignInPage";
import UpdatePage from "../../pages/UpdatePage";
import PetPage from "../../pages/PetPage";
import AddPet from "../../pages/AddPet";
import { RootStackParamList } from "../../types";
import { commonColors, fonts } from "../../theme";
import { EPage } from "../../enums";
import AppointmentList from "../../pages/AppointmentsList";
import CreateAppointmentPage from "../../pages/CreateAppointmentPage";
import AbuseInformationPage from "../../pages/AbuseInformationPage";
import SignUpPage from "../../pages/SignUpPage";
import PetStatus from "../../pages/PetStatus";
import { get } from "../../Api";

interface IInitData {
  version: string;
  updateRequired: boolean;
  link?: string;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigate = () => {
  const [fontsLoaded] = useFonts(fonts);

  const [initData, setInitData] = useState<IInitData>({
    version: packageJson.version,
    updateRequired: false,
  });

  const isUpdateNeeded =
    packageJson.version < initData.version && initData.updateRequired;
  const token = useSelector((state) => state.user.tokens);

  useEffect(() => {
    get("http://localhost:3000/app/init").then((response) =>
      setInitData(response.data)
    );
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isUpdateNeeded && (
          <Stack.Screen
            name={EPage.UPDATE_PAGE}
            options={{
              headerShown: false,
            }}
          >
            {/*// @ts-ignore*/}
            {(props) => <UpdatePage {...props} link={initData.link} />}
          </Stack.Screen>
        )}
        {token?.accessToken && !isUpdateNeeded ? (
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
            <Stack.Screen
              name={EPage.PET_STATUS}
              component={PetStatus}
              options={{
                title: "Edit pet status",
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
              component={SignUpPage}
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
