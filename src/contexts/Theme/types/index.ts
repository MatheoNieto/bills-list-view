import {globalDark} from '../constants/theme';

export type ThemeKeys = typeof globalDark;

export type Theme = {
  light: ThemeKeys;
  dark: ThemeKeys;
};

export type ThemeProps = {
  theme?: Theme;
};

export type ThemeProviderType = {
  mode: 'dark' | 'light';
  setThemeDark: () => void;
  setThemeLight: () => void;
  theme: ThemeKeys;
};
