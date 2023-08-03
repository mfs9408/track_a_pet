import { StyleSheet } from "react-native";
import { commonColors } from "../../theme";

export const makeStyles = () =>
  StyleSheet.create({
    header: {
      marginBottom: 15,
    },
    subHeader: {
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: "row",
    },
    touchableContainer: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: commonColors.primary.color,
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
      width: 75,
      height: 75,
      marginRight: 10,
    },
    icon: {
      marginBottom: 10,
    },
  });
