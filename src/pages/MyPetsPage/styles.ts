import { StyleSheet } from "react-native";

export const makeStyles = () =>
  StyleSheet.create({
    cardContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    text: {
      marginBottom: 15,
    },
    cardHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });
