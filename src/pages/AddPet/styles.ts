import { StyleSheet } from "react-native";

export const makeStyles = () =>
  StyleSheet.create({
    container: {
      marginBottom: 25,
    },
    buttonsContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    text: {
      marginBottom: 15,
    },
    genderChipContainer: {
      flexDirection: "row",
    },
    arrayTextField: {
      marginBottom: 10,
    },
    buttonText: {
      flex: 1,
      textAlign: "right",
    },
    addButtonContainer: {
      justifyContent: "flex-end",
      flexDirection: "row",
    },
    textField: {
      marginBottom: 10,
    },
  });
