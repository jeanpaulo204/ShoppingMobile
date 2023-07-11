import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card, Input, Button } from 'react-native-elements';
import CustomButton from '../components/CustomButton';

function LoginScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-start' }}>
      <Card containerStyle={{ paddingHorizontal: 20, borderWidth: 0, elevation: 0 }}>
        <View style={{ alignItems: 'center', marginTop: -40 }}>
          <Image
            source={require('../img/logo-shopping.png')}
            style={{ width: 200, height: 200, marginBottom: 20 }}
            resizeMode="contain"
          />
        </View>
        <Input label="E-mail" placeholder="Digite seu e-mail" />
        <Input label="Senha" placeholder="Digite sua senha" secureTextEntry />
        <TouchableOpacity onPress={() => console.log('Esqueci minha senha')}>
          <Text style={{ textAlign: 'right', marginVertical: 10, color: 'blue', textDecorationLine: 'underline' }}>
            Esqueci minha senha
          </Text>
        </TouchableOpacity>
        <CustomButton Text="Acessar" BgColor="#28a745"/>
        <Button title="Cadastrar-se" type="outline" />
      </Card>
    </View>
  );
}

export default LoginScreen;
