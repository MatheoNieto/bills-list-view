import {StyleSheet} from 'react-native';
import {ThemeKeys} from '../../../../contexts/Theme';

export const makeStyles = ({spacing, sizes, color }: ThemeKeys) =>
  StyleSheet.create({
    container: {
      padding: spacing[2],
    },
    title: {
      fontSize: sizes.large,
      textAlign: 'center',
      color: color.primary.orangeLight
    },
    head: {
      paddingHorizontal: spacing[4],
      borderBottomColor: color.primary.main,
      borderBottomWidth: 2,
      marginBottom: spacing[4]
    }
  });
