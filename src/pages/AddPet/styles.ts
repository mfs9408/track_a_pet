import { StyleSheet } from "react-native";

export const makeStyles = () =>
  StyleSheet.create({
    container: {
      marginBottom: 20,
    },
    buttonsContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    text: {
      marginBottom: 10,
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
    imagePickerContainer: {
      paddingTop: 0,
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "#FFF",
      zIndex: 9,
      marginTop: -60,
    },
  });
