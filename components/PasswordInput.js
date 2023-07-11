import React from 'react';
import { Input } from 'react-native-elements';

const PasswordInput = ({ label, text, title, onChangeText }) => {
  return (
    <Input
      placeholder={label}
      value={text}
      label={title}
      onChangeText={onChangeText}
      leftIcon={{
        type: 'font-awesome',
        name: 'lock',
        color: 'gray',
        size: 18,
      }}
      secureTextEntry={true}
      containerStyle={{
        marginBottom: 10,
      }}
      inputContainerStyle={{
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderWidth: 1,
        paddingLeft: 10,
        borderColor: 'gray',
      }}
      inputStyle={{
        marginLeft: 10,
        color: 'black',
      }}
    />
  );
};

export default PasswordInput;