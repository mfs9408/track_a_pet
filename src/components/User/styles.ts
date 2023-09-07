import { StyleSheet } from "react-native";

export const makeStyles = () =>
  StyleSheet.create({
    viewContainer: {
      flexDirection: "row",
      marginBottom: 30,
    },
    infoContainer: {
      flexDirection: "column",
    },
    iconContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    iconWrapper: {
      marginLeft: 20,
      backgroundColor: "rgba(249, 248, 253, 1)",
      height: 40,
      width: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
    },
  });
