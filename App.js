import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.batata}>
        <Text style={styles.texto}>Login</Text>
        <TextInput style={styles.input} placeholder="Digite algo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  batata: {
    height: 250,
    width: 250,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 23,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    width: '80%',
    borderRadius: 5,
  },
});
