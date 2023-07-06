import { StyleSheet } from 'react-native';
import { MD3Colors } from 'react-native-paper/lib/typescript/src/types';

export const makeStyles = (colors: MD3Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.tertiary,
      padding: 8,
      borderRadius: 5,
      flexDirection: 'row',
      marginBottom: 10,
    },
    descriptionContainer: {
      flexDirection: 'column',
      flex: 5,
    },
    timeContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
