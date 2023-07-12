import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card, Input, Button } from 'react-native-elements';
import CustomButton from '../components/CustomButton';

function CadastroScreen() {
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
        <Input placeholder="Nome completo"/>
        <Input placeholder="Nascimento"/>
        <Input placeholder="CPF"/>
        <Input placeholder="Telefone"/>
        <Input placeholder="E-mail"/>
        <Input placeholder="Função"/>
        <Input placeholder="Senha"/>
        <Input placeholder="Confirmar Senha"/>
        <CustomButton Text={"Cadastrar"}/>
      </Card>
        </View>
      );
}

export default CadastroScreen;
