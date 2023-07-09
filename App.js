import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Email from './components/input';
import Senha from './components/senha';
import { Button } from '@rneui/themed';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {

  const CliqueEmMim = () => {
    alert('Você apertou o ...!');
    
    console.log('Você apertou o botão');
  };



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.batata}>
        <Text style={styles.texto}>Login</Text>
        
          <Email Email="Digite seu Email"/>

          <Senha Senha="Digite sua senha"/>

      <View style={styles.btn}>
        <Button title="Solid" />
      </View>
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
  btn: {
    marginTop: 20,
  }
});
