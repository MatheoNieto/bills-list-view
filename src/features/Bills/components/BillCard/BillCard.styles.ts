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
    contentImage:{
      height: 150,
      
    },
    imageBill: {
      resizeMode: 'stretch',
      height: 150,
    },
    infoBill: {
      marginTop: spacing[1],
      borderTopWidth: 2,
      borderTopColor: color.primary.orangeLight,
      paddingVertical: spacing[1]
    },
    textBold:{
      fontWeight: fontWeight.bold
    }
  });
