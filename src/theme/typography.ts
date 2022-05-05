import {Platform} from 'react-native';

export const typography = {
  /**
   * The primary font.  Used in most places.
   */
  primary: Platform.select({ios: 'Lato-Regular', android: 'Lato-Regular'}),

  /**
   * The primary font.  Used in most places.
   */
  primaryBold: Platform.select({ios: 'Lato-Bold', android: 'Lato-Bold'}),

  /**
   * The primary font.  Used in most places.
   */
  primaryThin: Platform.select({ios: 'Lato-Thin', android: 'Lato-Thin'}),

  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ios: 'Arial', android: 'sans-serif'}),

  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ios: 'Courier', android: 'monospace'}),
};
