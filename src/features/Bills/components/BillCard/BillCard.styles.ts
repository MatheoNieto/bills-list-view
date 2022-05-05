import {StyleSheet} from 'react-native';
import {ThemeKeys} from 'src/contexts/Theme';

export const makeStyles = ({spacing, color, fontWeight}: ThemeKeys) =>
  StyleSheet.create({
    container: {
      padding: spacing[3],
      marginVertical: spacing[2],
      flex: 1,
      margin: spacing[2],
      flexDirection: 'column',
    },

    infoBill: {
      marginTop: spacing[1],
      borderTopWidth: 2,
      borderTopColor: color.primary.orangeLight,
      paddingVertical: spacing[1],
    },
    textBold: {
      fontWeight: fontWeight.bold,
    },
    seeMore: {
      marginVertical: spacing[1],
      padding: spacing[1],
      borderWidth: 1,
      borderColor: color.primary.grey,
    },
    seeMoreLabel: {
      fontWeight: fontWeight.bold,
      textAlign: 'center',
    },
  });
