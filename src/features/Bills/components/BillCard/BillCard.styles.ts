import {StyleSheet} from 'react-native';
import {ThemeKeys} from 'src/contexts/Theme';

export const makeStyles = ({spacing, color}: ThemeKeys) =>
  StyleSheet.create({
    container: {
      padding: spacing[3],
      marginVertical: spacing[2],
      borderBottomColor: color.primary.grey,
      borderBottomWidth: 1
    },
  });
