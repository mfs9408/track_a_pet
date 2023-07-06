import { StyleSheet } from "react-native";
import { MD3Colors } from "react-native-paper/lib/typescript/src/types";

export const makeStyles = (colors: MD3Colors) =>
  StyleSheet.create({
    image: {
      width: "100%",
      height: 350,
    },
    infoContainer: {
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    header: {
      marginRight: 15,
    },
    icon: {
      marginRight: 5,
    },
    editButton: {
      justifyContent: "flex-end",
    },
  });
