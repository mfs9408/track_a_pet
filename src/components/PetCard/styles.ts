import { StyleSheet } from "react-native";

export const makeStyles = () =>
  StyleSheet.create({
    viewContainer: {
      width: 157,
      height: 230,
      marginBottom: 20,
    },
    image: {
      width: "100%",
      height: 167,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    },
    content: {
      padding: 10,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    nameWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    tagsContainer: {
      flexDirection: "row",
    },
  });
