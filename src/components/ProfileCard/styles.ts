import { StyleSheet } from "react-native";

export const makeStyles = () =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 17,
      paddingVertical: 15,
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
    },
    icon: {
      marginRight: 10,
    },
  });
