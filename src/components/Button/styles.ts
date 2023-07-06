import { StyleSheet } from "react-native";
import { MD3Colors } from "react-native-paper/lib/typescript/src/types";

export const makeStyles = () =>
  StyleSheet.create({
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 40,
      backgroundColor: "#715BC4",
      borderColor: "#715BC4",
      borderWidth: 1,
      shadowColor: "rgba(0, 0, 0, 0.07)",
      shadowOffset: { width: 1, height: 3 },
      shadowOpacity: 0.4,
      shadowRadius: 25,
    },
    text: {
      color: "#fff",
    },
  });
