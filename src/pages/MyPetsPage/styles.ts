import { StyleSheet } from 'react-native';
import { MD3Colors } from 'react-native-paper/lib/typescript/src/types';

export const makeStyles = (colors: MD3Colors) =>
  StyleSheet.create({
    cardContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    text: {
      marginBottom: 15,
    },
  });
