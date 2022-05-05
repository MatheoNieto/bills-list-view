import {ThemeKeys} from '@contexts/Theme';
import {StyleSheet, Dimensions} from 'react-native';
import {PopUpStyleTypes} from './PopUp.types';

export const makeStyles = (
  {color}: ThemeKeys,
  {card, cover, sheet}: PopUpStyleTypes,
) =>
  StyleSheet.create({
    cover: {
      backgroundColor: color.shadowGrey,
      ...cover,
    },
    card: {
      minHeight: 300,
      minWidth: 300,
      maxHeight: 890,
      backgroundColor: color.white,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      paddingHorizontal: 24,
      paddingVertical: 16,
      ...card,
    },
    sheet: {
      position: 'absolute',
      top: Dimensions.get('window').height,
      left: 0,
      right: 0,
      height: '100%',
      justifyContent: 'flex-end',
      ...sheet,
    },
    overlay: {
      width: '100%',
      height: '100%',
    },
  });
