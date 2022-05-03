import {useContext} from 'react';
import {ThemeContext} from '../ThemeContext';
import {ThemeProviderType} from '../types';

export const useTheme = (): ThemeProviderType => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error('useTheme must be used inside ThemeContext');
  }

  return theme;
};
