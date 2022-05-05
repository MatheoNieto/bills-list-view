import React, {FC, createContext, useState, useMemo} from 'react';
import {useColorScheme} from '../../hooks/useColorScheme';
import {globalLight, globalDark} from './constants/theme';
import {ThemeProps, ThemeProviderType} from './types';

export const ThemeContext = createContext<ThemeProviderType | undefined>(
  undefined,
);

export const ThemeProvider: FC<ThemeProps> = ({children, theme = {}}) => {
  const appearance = useColorScheme();

  const globalTheme = useMemo(
    () => ({dark: globalDark, light: globalLight, ...theme}),
    [theme],
  );

  const [mode, setMode] = useState<'dark' | 'light'>(appearance || 'light');

  const setThemeDark = () => setMode('dark');

  const setThemeLight = () => setMode('light');

  return (
    <ThemeContext.Provider
      value={{mode, setThemeLight, setThemeDark, theme: globalTheme[mode]}}>
      {children}
    </ThemeContext.Provider>
  );
};
