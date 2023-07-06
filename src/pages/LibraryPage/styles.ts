import { StyleSheet } from "react-native";
import { MD3Colors } from "react-native-paper/lib/typescript/src/types";

export const makeStyles = (colors?: MD3Colors) =>
  StyleSheet.create({
    search: {
      height: 40,
      backgroundColor: "rgba(238, 238, 238, 1)",
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10,
      paddingHorizontal: 0,
      flexGrow: 1,
      fontSize: 16,
    },
    textBlock: {
      flexDirection: "row",
      marginBottom: 35,
      alignItems: "center",
    },
    icon: {
      height: 40,
      backgroundColor: "rgba(238, 238, 238, 1)",
      paddingHorizontal: 10,
      flexDirection: "row",
      alignItems: "center",
      borderBottomLeftRadius: 10,
      borderTopLeftRadius: 10,
    },
    articlesContainer: {
      flexDirection: "column",
    },
  });
