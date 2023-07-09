import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';


export default function App() {

  const CliqueEmMim = () => {
    alert('Você apertou o' );
    
    console.log('Você apertou o botão');
  };



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
     
    </View>
  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
