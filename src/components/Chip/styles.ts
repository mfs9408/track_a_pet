import { StyleSheet } from "react-native";
import { MD3Colors } from "react-native-paper/lib/typescript/src/types";

export const makeStyles = (selected: boolean) =>
  StyleSheet.create({
    container: {
      height: 40,
      borderWidth: 1,
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 40,
      borderColor: "rgba(106, 82, 198, 0.20)",
      backgroundColor: selected
        ? "rgba(151, 129, 217, 0.20) 93.75%)"
        : "rgba(217, 214, 218, 0.20)",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    wrapper: {
      marginRight: 10,
    },
  });
