import { StyleSheet } from "react-native";

export const makeStyles = () =>
  StyleSheet.create({
    header: {
      marginBottom: 50,
    },
    error: {
      marginTop: 5,
      color: "red",
    },
    controllerContainer: {
      marginBottom: 20,
    },
    passwordContainer: {
      alignItems: "flex-end",
      marginBottom: 30,
    },
    inputHeader: {
      marginBottom: 5,
    },
    textInput: {
      borderRadius: 10,
    },
    button: {
      width: 250,
    },
    buttonContainer: {
      alignItems: "center",
      marginBottom: 30,
    },
    accountText: {
      marginRight: 5,
    },
    accountTextWrapper: {
      flexDirection: "row",
      justifyContent: "center",
    },
  });
