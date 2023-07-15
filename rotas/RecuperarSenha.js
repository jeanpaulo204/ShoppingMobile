import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { Card, Input, Button, Text } from 'react-native-elements';
import CustomButton from '../components/CustomButton';
import DialogRecupera from '../components/DialogRecupera';

function RecuperarSenha() {
    const [dialogvisivel, setdialogvisivel] = useState(false);

    const abrirDialog = () => {
      setdialogvisivel(true);
    }

    const fecharDialog = () => {
      setdialogvisivel(false);
    }

    const [email, setEmail] = useState('');

      const SalvarEmail = (text) => {
        setEmail(text);
      };


  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-start' }}>
    <Card containerStyle={{ paddingHorizontal: 20, elevation: 0, marginTop: 100 }}>
      <View style={{ alignItems: 'center', marginTop: -40 }}>
        <Image
          source={require('../img/logo-shopping.png')}
          style={{ width: 150, height: 140, marginBottom: 10, marginTop: 30}}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.Title}>RECUPERAÇÃO SENHA</Text>
      <Text style={styles.SubTitle}>Enviaremos um link para o seu e-mail com instruções para sua recuperação de senha!</Text>
      <Input value={email}  onChangeText={SalvarEmail} placeholder="E-mail ou usuário" />
      <CustomButton  onPress={abrirDialog} Text="Enviar" BgColor="#28a745" />
    </Card>
    <DialogRecupera email={email}  abrir={dialogvisivel} fechar={fecharDialog}/>
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
    fontSize: 20,
    marginBottom: 30,
    color: 'gray',

  },

  Title: {
    fontSize: 24,
    marginBottom: 30,
    color: 'purple',
  }
});

export default RecuperarSenha;
