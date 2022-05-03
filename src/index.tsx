import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ThemeProvider, Theme} from './contexts/Theme';
import {Bills} from './features/Bills';

export const Application = ({theme}: {theme?: Theme}) => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.safeAreaView}>
        <Bills />
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
});
