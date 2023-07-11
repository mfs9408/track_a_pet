import { StyleSheet } from "react-native";

export const makeStyles = () =>
  StyleSheet.create({
    scrollView: {
      position: "relative",
      backgroundColor: "#fff",
    },
    commonContainer: {
      marginTop: -20,
      backgroundColor: "#fff",
      borderRadius: 20,
    },
    backIcon: {
      position: "absolute",
      top: 70,
      left: 25,
      zIndex: 2,
    },
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
      marginRight: 10,
    },
    icon: {
      marginRight: 5,
    },
    editButton: {
      justifyContent: "flex-end",
    },
    dataWrapper: {
      flexDirection: "column",
      alignItems: "flex-start",
      marginVertical: 35,
    },
    dataContainer: {
      marginBottom: 20,
    },
    iconContainer: {
      flexDirection: "row",
      marginBottom: 10,
    },
    subDataContainer: {
      flexDirection: "column",
      marginBottom: 10,
    },
    subHeaderContainer: {
      flexDirection: "row",
    },
    additionalRecordsContainer: {
      marginLeft: 15,
      flexDirection: "row",
    },
  });
