import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  mainPage: undefined;
  myPetsPage: undefined;
  petPage: { petId: string };
  editPage: undefined;
  addPetPage: undefined;
  currentRemindersPage: undefined;
  remindersListPage: undefined;
  createReminderPage: { reminderType: string };
  welcomePage: undefined;
  signInPage: undefined;
  signUpPage: undefined;
  successPage: undefined;
};

export type CommonStackScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "petPage" | "createReminderPage"
>;

export type RouteProps = CommonStackScreenProps["route"];
