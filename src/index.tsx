import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native'
import {Bills} from './features/Bills'


export const Application = () => {

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Bills />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
});