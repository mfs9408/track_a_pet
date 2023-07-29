import { StyleSheet } from "react-native";
import { commonColors } from "../../theme";

export const makeStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: commonColors.background.backgroundColor,
      height: "100%",
    },
    commonPadding: {
      paddingHorizontal: 28,
    },
    commonWrapper: {
      paddingHorizontal: 28,
      paddingTop: 20,
    },
    blockHeader: {
      marginBottom: 15,
      marginTop: 10,
    },
    addButtonsContainer: {
      backgroundColor: commonColors.lightPrimary.color,
      paddingHorizontal: 30,
      paddingVertical: 15,
    },
    flatListContainer: {
      marginBottom: 20,
    },
  });
