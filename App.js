import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Quadrado from './components/input';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function App() {

  const CliqueEmMim = () => {
    alert('Você apertou o botão!!');
    
    console.log('Você apertou o botão');
  };



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.batata}>
        <Text style={styles.texto}>Login</Text>
        
          <Quadrado Email="Digite seu Email"/>

          <Quadrado Senha="Digite sua senha"/>

      <View style={styles.btn}>
        <Button onPress={CliqueEmMim} title="Entrar" />
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
