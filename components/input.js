import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';



const Input = ({Email, Senha}) => {
  return (

  <View >
<Text>
    <TextInput style={styles.input} placeholder={Email}/>
    <TextInput style={styles.input} placeholder={Senha}/>
</Text>
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


export default Input;


