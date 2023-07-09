import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet,Text, View, TextInput } from 'react-native';


export default function App() {




  return (
    <View style={styles.container}>
      <StatusBar style="auto" /> 
      <View style={styles.azul}>
        <Text>Login</Text>
        <TextInput Title="Texto"/>
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
azul: {
  width: 250,
  height: 250,
  backgroundColor: 'blue'
}

});
