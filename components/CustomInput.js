import React from 'react';
import { Input } from 'react-native-elements';

const CustomInput = ({ Label, Text }) => {
  return (
    <Input
      placeholder={Text}
      label={Label}
      leftIcon={{
        type: 'font-awesome',
        name: 'user',
        color: 'gray',
        size: 18,
      }}
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
        backgroundColor: 'white',
      }}
      inputStyle={{
        marginLeft: 10,
        color: 'black',
      }}
    />
  );
};

export default CustomInput;
