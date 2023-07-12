import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';
import { Card, Input, Button } from 'react-native-elements';

function RecuperarSenha() {

  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-start' }}>
   <Text>Recuperar Senha</Text>
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
});

export default RecuperarSenha;
