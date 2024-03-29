import {StyleSheet} from 'react-native';
import {ThemeKeys} from '@contexts/Theme';

export const makeStyles = ({spacing, color}: ThemeKeys) =>
  StyleSheet.create({
    container: {
      padding: spacing[3],
      backgroundColor: color.white,
      alignItems: 'flex-end',
    },
  });
