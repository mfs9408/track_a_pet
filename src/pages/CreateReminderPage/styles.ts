import { StyleSheet } from "react-native";

export const makeStyles = () =>
  StyleSheet.create({
    header: {
      marginBottom: 30,
    },
    formContainer: {
      marginBottom: 20,
    },
    viewWrapper: {
      paddingBottom: 100,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    switcherContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
      addButtonBlock: {
          flexDirection: "row", justifyContent: "space-around"
      }
  });
