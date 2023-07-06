import { StyleSheet } from "react-native";
import { MD3Colors } from "react-native-paper/lib/typescript/src/types";

export const makeStyles = () =>
  StyleSheet.create({
    menuContainer: {
      borderWidth: 1,
      borderColor: "#D9D9D9",
      borderRadius: 10,
      backgroundColor: "#fff",
      marginBottom: 40,
    },
    block: {
      paddingHorizontal: 17,
      paddingVertical: 15,
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
    },
  });
