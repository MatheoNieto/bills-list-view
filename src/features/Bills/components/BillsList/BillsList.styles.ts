import {StyleSheet} from 'react-native';
import {ThemeKeys} from 'src/contexts/Theme';

export const makeStyles = ({spacing, sizes}: ThemeKeys) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      height: '90%'
    },
  });
