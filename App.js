import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet,Text, View, TextInput, Button, Alert } from 'react-native';


export default function App() {

const CliqueEmMim = () => {
  Alert.alert('Clicou aqui')
}

  return (
    <View style={styles.container}>
      <StatusBar style="auto" /> 
      <View style={styles.azul}>
        <Text>Login</Text>
        <TextInput style={styles.branco} placeholder="Email"/>
        <TextInput style={styles.branco} placeholder="Senha"/>
        <Button onPress={CliqueEmMim} title='Clique em mim'/> 
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
  backgroundColor: 'blue',
  justifyContent: 'center',
  alignItems: 'center'
},
branco: {
  width: 100,
  backgroundColor: 'white'
}

});
