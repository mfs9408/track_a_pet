import { StyleSheet } from "react-native";

export const makeStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: "#F0EFF4",
      borderRadius: 10,
      paddingHorizontal: 30,
      paddingTop: 10,
      paddingBottom: 7.5,
      marginBottom: 20,
    },
    itemContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 2.5,
    },
    icon: {
      marginRight: 10,
    },
    closeButtonContainer: {
      backgroundColor: "#F0EFF4",
      height: "100%",
      borderRadius: 10,
      paddingHorizontal: 20,
      marginRight: 10,
      justifyContent: "center",
    },
    underlayLeft: {
      height: "100%",
      paddingBottom: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    descriptionHeaderContainer: {
      height: "100%",
    },
    descriptionText: {
      flex: 1,
    },
  });
