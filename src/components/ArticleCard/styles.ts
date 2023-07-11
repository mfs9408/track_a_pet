import { StyleSheet } from "react-native";

export const makeStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      height: 150,
      marginBottom: 25,
      flexDirection: "row",
      borderRadius: 20,
      backgroundColor: "#F0EFF4",
    },
    textContainer: {
      paddingVertical: 20,
      paddingRight: 120,
      paddingLeft: 20,
      borderBottomEndRadius: 20,
    },
  });
