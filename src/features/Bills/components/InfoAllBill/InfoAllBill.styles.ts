import {StyleSheet} from 'react-native';
import {ThemeKeys} from 'src/contexts/Theme';

export const makeStyles = ({spacing, fontWeight}: ThemeKeys) =>
  StyleSheet.create({
    infoBill: {
      flexGrow: 1,
      paddingVertical: spacing[1],
      flexDirection: 'column-reverse',
      justifyContent: 'center',
      alignItems: 'center'
    },

    textBold: {
      fontWeight: fontWeight.bold,
    },
    imageBill: {
      height: 150,
      width: 150
    }
  });
