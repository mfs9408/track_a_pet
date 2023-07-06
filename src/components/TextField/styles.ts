import { StyleSheet } from "react-native";
import { MD3Colors } from "react-native-paper/lib/typescript/src/types";

export const makeStyles = () =>
  StyleSheet.create({
    input: {
      height: 40,
      borderWidth: 1,
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 40,
      borderColor: "rgba(106, 82, 198, 0.20)",
      backgroundColor: "rgba(217, 214, 218, 0.20)",
    },
    isFocused: {
      borderColor: "rgba(129, 110, 199, 1)",
    },
  });
