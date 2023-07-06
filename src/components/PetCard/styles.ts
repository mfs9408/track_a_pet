import { StyleSheet } from 'react-native';
import { MD3Colors } from 'react-native-paper/lib/typescript/src/types';

export const makeStyles = (colors: MD3Colors) =>
  StyleSheet.create({
    viewContainer: {
      width: 157,
      height: 230,
      marginBottom: 20,
    },
    image: {
      width: '100%',
      height: 167,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    },
    content: {
      backgroundColor: colors.onBackground,
      padding: 10,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    nameWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    tagsContainer: {
      flexDirection: 'row',
    },
  });
