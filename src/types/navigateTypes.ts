import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  mainPage: undefined;
  myPetsPage: undefined;
  petPage: { petId: string };
  addPetPage: { id?: string | undefined };
  currentRemindersPage: undefined;
  remindersListPage: undefined;
  createReminderPage: { reminderType: string; reminderId?: string };
  welcomePage: undefined;
  signInPage: undefined;
  signUpPage: undefined;
  successPage: undefined;
};

export type RoutePropsProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>["route"];
