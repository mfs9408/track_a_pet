import { StyleSheet } from "react-native";
import { commonColors } from "../../theme";

export const makeStyles = () =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 25,
      paddingVertical: 10,
      backgroundColor: commonColors.background.backgroundColor,
      borderRadius: 10,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    innerContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    icon: {
      marginRight: 10,
    },
  });
