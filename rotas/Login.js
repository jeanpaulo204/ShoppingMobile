import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomInput from '../components/CustomInput';
import PasswordInput from '../components/PasswordInput';
import CustomButton from '../components/CustomButton';

function LoginScreen() {
  return (
    <View style={styles.fundo}>
      <Image
        source={require('../img/logo-shopping.png')}
        style={{ width: 300, height: 300 , marginBottom: 30}}
        resizeMode="contain"
      />
      <CustomInput Label="E-mail" Text="Digite seu e-mail" />
      <PasswordInput Label="Senha" Text="Digite sua senha" />
      <View style={styles.ViewFlex}>
        <CustomButton Text="Acessar" />
        <Text style={styles.registerText}>Cadastrar-se</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ViewFlex: {
    flexDirection: 'row',
    marginTop: 10,
  },
  registerText: {
    marginLeft: 50,
    marginTop: 13,
    color: 'blue',
  },
  fundo: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
