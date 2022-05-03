import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ThemeProvider, Theme} from './contexts/Theme';
import {Bills} from './features/Bills';

import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';

import English from './i18n/translations/en.json';
import Spanish from './i18n/translations/es.json';

i18next.init({
  interpolation: {escapeValue: false},
  lng: 'en',
  compatibilityJSON: 'v3',
  defaultNS: 'local',
  resources: {
    es: {
      local: Spanish,
    },
    en: {
      local: English,
    },
  },
  react: {
    useSuspense: false,
  },
});

export const Application = ({theme}: {theme?: Theme}) => {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18next}>
        <SafeAreaView style={styles.safeAreaView}>
          <Bills />
        </SafeAreaView>
      </I18nextProvider>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
});
