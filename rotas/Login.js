import React from 'react';
import { View, Text, Image} from 'react-native';
import CustomInput from '../components/CustomInput';
import PasswordInput from '../components/PasswordInput';
import CustomButton from '../components/CustomButton';
import { Card } from '@rneui/themed';

function LoginScreen() {
  return (

    <Card>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image
      source={require('../img/logo-shopping.png')}
      style={{ width: 200, height: 250 }}
      resizeMode="contain"
    />
      <CustomInput   Label="E-mail" Text="Digite seu e-mail"/>
      <PasswordInput Label="Senha" Text="Digite sua senha"  />
      <CustomButton Text="Acessar"/>
    </View>
    </Card>
  );
}

export default LoginScreen;
