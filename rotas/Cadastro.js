import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';
import { Card, Input, Button } from 'react-native-elements';

function CadastroScreen() {
  const [birthDate, setBirthDate] = useState('');
  const [role, setRole] = useState('');

  const handleDateChange = (text) => {
    let formattedDate = formatDateString(text);
    setBirthDate(formattedDate);
  };

  const formatDateString = (text) => {
    let formatted = text.replace(/\D/g, '');
    if (formatted.length > 2) {
      formatted = formatted.replace(/^(\d{2})(\d)/g, '$1/$2');
    }
    if (formatted.length > 5) {
      formatted = formatted.replace(/^(\d{2})\/(\d{2})(\d)/g, '$1/$2/$3');
    }
    return formatted;
  };

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
        <Input placeholder="Nome completo" />
        <Input
          placeholder="Nascimento "
          keyboardType="numeric"
          value={birthDate}
          onChangeText={handleDateChange}
        />
        <Input placeholder="CPF" keyboardType="numeric" />
        <Input placeholder="Telefone" keyboardType="phone-pad" />
        <Input placeholder="E-mail" />
        <Input placeholder="Função" />
        <Input placeholder="Senha" secureTextEntry={true} />
        <Input placeholder="Confirmar Senha" secureTextEntry={true} />
   
        <Button title="Cadastrar" />
        
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
  picker: {
    height: 40,
  },
});

export default CadastroScreen;
