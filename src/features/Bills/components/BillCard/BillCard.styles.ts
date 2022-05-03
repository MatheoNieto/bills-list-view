import {StyleSheet} from 'react-native';
import {ThemeKeys} from 'src/contexts/Theme';

export const makeStyles = ({spacing}: ThemeKeys) =>
  StyleSheet.create({
    container: {
      padding: spacing[2],
    },
  });
