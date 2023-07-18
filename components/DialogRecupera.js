import React, { useState } from 'react';
import { View, Image, StyleSheet , Text} from 'react-native';
import {Overlay, Card, Input, } from 'react-native-elements';
import CustomButton from '../components/CustomButton';

function DialogRecupera({abrir, fechar, email}) {

  return (
    <Overlay isVisible={abrir} onBackdropPress={fechar}>
        <View>
            <Card containerStyle={{ paddingHorizontal: 20, elevation: 0, marginTop: 100 }}>
            <View style={{ alignItems: 'center', marginTop: -40 }}>
            <Image
                source={require('../img/logo-shopping.png')}
                style={{ width: 150, height: 140, marginBottom: 10, marginTop: 30}}
                resizeMode="contain"
            />
        </View>
        <View style={styles.Centro}>
            <Text style={styles.Title}>LINK ENVIADO</Text>
            <Text style={styles.SubTitle}>Enviamos um link para o e-mail <Text style={styles.Strong}>{email.toString()}</Text> para recuperação de senha. Por favor verifique sua caixa de entrada e siga as instruções para recuperação de acesso!</Text>
        </View>
    </Card>
        </View>
        <CustomButton onPress={fechar} Text="Ok" BgColor="#28a745" />
    </Overlay>
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
        color: 'gray',
    
      },
    
      Title: {
        fontSize: 24,
        marginBottom: 30,
        color: 'purple',
      },

      Strong: {
        color: 'purple',
      },

      Centro: {
        display: 'flex',
        alignItems: 'center',
        
    }
});

export default DialogRecupera;
