import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';

export default function Graficos() {
  return (
    <View style={styles.container}>
      <Text>Página Graficos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 25,
    fontWeight: 'bold',
  }
})