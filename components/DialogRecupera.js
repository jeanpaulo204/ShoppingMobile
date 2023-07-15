import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {Overlay, Text} from 'react-native-elements';
import CustomButton from '../components/CustomButton';

function DialogRecupera({abrir, fechar}) {

  return (
    <Overlay>
        <View>
            <Text>Titulo do dialog</Text>
            <Text>Mensagem do dialog</Text>
        </View>

    </Overlay>
  );

}

const styles = StyleSheet.create({

});

export default DialogRecupera;
