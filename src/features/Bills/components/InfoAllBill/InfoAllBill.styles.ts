import {StyleSheet} from 'react-native';
import {ThemeKeys} from 'src/contexts/Theme';

export const makeStyles = ({spacing, fontWeight}: ThemeKeys) =>
  StyleSheet.create({
    infoBill: {
      marginTop: spacing[1],
      paddingVertical: spacing[1],
    },

    textBold: {
      fontWeight: fontWeight.bold,
    },
  });
