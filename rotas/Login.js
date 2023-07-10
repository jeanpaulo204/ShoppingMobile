import React from 'react';
import { View, Text, Button } from 'react-native';
import CustomInput from '../components/CustomInput';
import PasswordInput from '../components/PasswordInput';
import CustomButton from '../components/CustomButton';

function LoginScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Terceira</Text>
      <CustomInput   Label="E-mail" Text="Digite seu e-mail"/>
      <PasswordInput Label="Senha" Text="Digite sua senha"  />
      <CustomButton/>
    </View>
  );
}

export default LoginScreen;
