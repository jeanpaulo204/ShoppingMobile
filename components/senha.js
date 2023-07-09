import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';



const Senha = ({Senha}) => {
  return (

    <View >
        <TextInput secureTextEntry={true} style={styles.input} placeholder={Senha}/>
    </View>
    
  );
};


const styles = StyleSheet.create({
    input: {
      backgroundColor: 'white',
      padding: 10,
      marginTop: 10,
      width: '80%',
      borderRadius: 5,
    },
  });


export default Senha;