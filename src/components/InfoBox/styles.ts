import { StyleSheet } from "react-native";
import { MD3Colors } from "react-native-paper/lib/typescript/src/types";

export const makeStyles = () =>
  StyleSheet.create({
    container: {
      height: 70,
      width: 70,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#C3BEDA",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      color: "#6A52C6",
    },
    description: {
      color: "rgba(180, 174, 174, 1)",
    },
  });
