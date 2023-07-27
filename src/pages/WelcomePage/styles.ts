import { StyleSheet } from "react-native";

export const makeStyles = () =>
  StyleSheet.create({
    scrollView: {
      height: "100%",
    },
    mainContainer: {
      paddingVertical: 60,
      alignItems: "center",
    },
    image: {
      marginBottom: 30,
    },
    header: {
      fontSize: 38,
    },
    secondHeader: {
      marginBottom: 20,
    },
    additionalHeader: {
      marginBottom: 135,
    },
    button: {
      paddingHorizontal: 120,
      paddingVertical: 20,
      marginBottom: 30,
    },
    accountTextWrapper: {
      flexDirection: "row",
    },
    accountText: {
      marginRight: 5,
    },
  });
