import {StyleSheet} from 'react-native';
import {ThemeKeys} from 'src/contexts/Theme';

export const makeStyles = ({spacing, color, fontWeight}: ThemeKeys) =>
  StyleSheet.create({
    container: {
      padding: spacing[3],
      backgroundColor: color.white,
      alignItems: 'flex-end',
    },
  });
