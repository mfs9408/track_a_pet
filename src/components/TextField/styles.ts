import { StyleSheet } from "react-native";
import { commonColors } from "../../theme";

export const makeStyles = (error?: boolean) =>
  StyleSheet.create({
    label: {
      marginBottom: 10,
    },
    input: {
      height: 40,
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
    isFocused: {
      borderColor: "rgba(129, 110, 199, 1)",
    },
  });
