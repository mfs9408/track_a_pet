import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  mainPage: undefined;
  myPetsPage: undefined;
  petPage: { petId: string };
  editPage: undefined;
  addPetPage: undefined;
  currentRemindersPage: undefined;
  remindersListPage: undefined;
  createReminderPage: undefined;
  welcomePage: undefined;
  signInPage: undefined;
  signUpPage: undefined;
};

export type CommonStackScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "petPage"
>;

export type RouteProps = CommonStackScreenProps["route"];
