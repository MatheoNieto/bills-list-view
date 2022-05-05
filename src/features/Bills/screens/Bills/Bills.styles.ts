import {StyleSheet} from 'react-native';
import {ThemeKeys} from '@contexts/Theme';

export const makeStyles = ({spacing, sizes, color }: ThemeKeys) =>
  StyleSheet.create({
    container: {
      padding: spacing[2],
    },
    title: {
      fontSize: sizes.large,
      textAlign: 'center',
      color: color.primary.grey
    },
    head: {
      paddingHorizontal: spacing[4],
      paddingVertical: spacing[2],
      borderBottomColor: color.primary.grey,
      borderBottomWidth: 2,
      marginBottom: spacing[4]
    }
  });
