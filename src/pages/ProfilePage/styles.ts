import { StyleSheet } from "react-native";

export const makeStyles = () =>
  StyleSheet.create({
    imgContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 50,
    },
    email: {
      color: "rgba(95, 91, 91, 1)",
      fontWeight: "400",
    },
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
