import { StyleSheet } from "react-native";
import { commonColors } from "../../theme";

export const makeStyles = (error?: boolean) =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 40,
      borderColor: error
        ? commonColors.error.color
        : commonColors.lightPrimary.color,
      backgroundColor: "rgba(217, 214, 218, 0.20)",
      marginBottom: 20,
    },
    wrapper: {
      marginRight: 10,
    },
    label: {
      marginBottom: 10,
    },
  });
