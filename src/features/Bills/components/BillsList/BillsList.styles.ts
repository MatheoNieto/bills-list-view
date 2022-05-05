import {StyleSheet} from 'react-native';
import {ThemeKeys} from '@contexts/Theme';

export const makeStyles = ({}: ThemeKeys) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      height: '90%'
    },
  });
