import { StyleSheet } from "react-native";
import { commonColors } from "../../../theme";

export const makeStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: "#F0EFF4",
      borderRadius: 10,
      paddingHorizontal: 30,
      paddingVertical: 10,
      marginBottom: 20,
    },
    closeButtonContainer: {
      backgroundColor: commonColors.error.color,
      height: "100%",
      borderRadius: 10,
      paddingHorizontal: 20,
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
