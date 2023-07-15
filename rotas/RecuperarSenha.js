import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { Card, Input, Button, Text } from 'react-native-elements';
import CustomButton from '../components/CustomButton';

function RecuperarSenha() {

  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-start' }}>
    <Card containerStyle={{ paddingHorizontal: 20, borderWidth: 0, elevation: 0 }}>
      <View style={{ alignItems: 'center', marginTop: -40 }}>
        <Image
          source={require('../img/logo-shopping.png')}
          style={{ width: 150, height: 140, marginBottom: 10 }}
          resizeMode="contain"
        />
      </View>
      <Text h4>Recuperação Senha</Text>
      <br/>
      <Text style={styles.SubTitle}>Enviaremos um link para o seu e-mail com instruções para sua recuperação de senha!</Text>
      <Input placeholder="E-mail ou usuário" />
      <CustomButton Text="Enviar" BgColor="#28a745" />
    </Card>
  </View>
  );

}

const styles = StyleSheet.create({
  pickerContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
  },

  SubTitle: {
    fontSize: 18,
    marginBottom: 30,

  }
});

export default RecuperarSenha;
