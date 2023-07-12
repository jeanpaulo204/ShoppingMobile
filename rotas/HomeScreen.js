import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Card, Input, Button } from 'react-native-elements';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import PasswordInput from '../components/PasswordInput';

function HomeScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'Admin' && password === '123') {
      // Usuário autenticado com sucesso, você pode redirecionar para a próxima tela
      navigation.navigate('Login');
    } else {
      Alert.alert('Erro de autenticação', 'E-mail ou senha inválidos');
    }
  };

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
        <CustomInput title="E-mail" label="Digite seu e-mail" onChangeText={setEmail} />
        <PasswordInput title="Senha" label="Digite sua senha" onChangeText={setPassword} />
        <TouchableOpacity onPress={() => navigation.navigate('Recuperar Senha')}>
          <Text style={{ textAlign: 'right', marginVertical: 10, color: 'blue', textDecorationLine: 'underline' }}>
            Esqueci minha senha
          </Text>
        </TouchableOpacity>
        <CustomButton Text="Acessar" BgColor="#28a745" onPress={handleLogin} />
        <Button onPress={() => navigation.navigate('Cadastro')} title="Cadastrar-se" type="outline" />
      </Card>
    </View>
  );
}

export default HomeScreen;
