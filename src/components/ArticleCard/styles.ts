import { StyleSheet } from "react-native";
import { MD3Colors } from "react-native-paper/lib/typescript/src/types";

export const makeStyles = (colors?: MD3Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      height: 150,
      marginBottom: 25,
      flexDirection: "row",
      borderRadius: 20,
      // borderColor: "rgba(106, 82, 198, 0.20)",
      // borderWidth: 1,
      backgroundColor: "#F0EFF4",
    },
    textContainer: {
      paddingVertical: 20,
      paddingRight: 120,
      paddingLeft: 20,
      borderBottomEndRadius: 20,
    },
  });
