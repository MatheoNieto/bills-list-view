import {StyleSheet} from 'react-native';
import {ThemeKeys} from '@contexts/Theme';
import {ImageTypeStyles} from './Image.types';

export const makeStyles = (
  {}: ThemeKeys,
  {contentStyle, styleImage}: ImageTypeStyles,
) =>
  StyleSheet.create({
    contentImage: {
      height: 150,
      ...contentStyle,
    },
    imageBill: {
      resizeMode: 'stretch',
      height: 150,
      ...styleImage,
    },
  });
