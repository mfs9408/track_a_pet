import { StyleSheet } from 'react-native';
import { MD3Colors } from 'react-native-paper/lib/typescript/src/types';

export const makeStyles = (colors?: MD3Colors) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      marginTop: 20,
      flexDirection: 'column',
      alignItems: 'center',
    },
  });
