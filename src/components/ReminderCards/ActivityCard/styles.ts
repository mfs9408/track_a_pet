import { StyleSheet } from "react-native";

export const makeStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: "#F0EFF4",
      borderRadius: 10,
      paddingHorizontal: 30,
      paddingVertical: 10,
      marginBottom: 20,
    },
    wrapper: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    iconWrapper: {
      flexDirection: "row",
      marginBottom: 8,
      alignItems: "center",
    },
    icon: {
      marginRight: 10,
    },
    descriptionContainer: {
      flexDirection: "column",
      flex: 5,
    },
    timeContainer: {
      flex: 1,
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
  });
