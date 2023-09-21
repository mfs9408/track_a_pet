import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  welcomePage: undefined;
  signInPage: undefined;
  signUpPage: undefined;
  addPetPage: { id?: string | undefined };
  petPage: { petId: string };
  currentRemindersPage: undefined;
  remindersListPage: undefined;
  createReminderPage: { reminderType: string; reminderId?: string };
  mainPage: undefined;
  homePage: undefined;
  myPetsPage: undefined;
  library: undefined;
  profilePage: undefined;
  successPage: undefined;
  changeProfilePage: undefined;
  appointmentListPage: undefined;
  createAppointmentPage: { id?: string };
  abuseInformationPage: undefined;
  mapPage: undefined;
  petStatusPage: { petId: string };
};

export type RoutePropsProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>["route"];
