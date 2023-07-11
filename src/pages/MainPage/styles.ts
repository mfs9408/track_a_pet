import { StyleSheet } from "react-native";
import { commonColors } from "../../theme";

export const makeStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: commonColors.background.backgroundColor,
      height: "100%",
    },
    commonWrapper: {
      paddingHorizontal: 28,
      paddingTop: 20,
    },
    blockHeader: {
      fontWeight: "600",
      marginBottom: 15,
    },
  });
