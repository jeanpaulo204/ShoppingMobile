import React from 'react';
import { Input } from 'react-native-elements';

const CustomInput = ({Label,Text}) => {
  return (
    <Input
      placeholder={Text}
      label={Label}
      leftIcon={{ type: 'font-awesome', name: 'user' }}
      containerStyle={{
        marginBottom: 10,
      }}
      inputContainerStyle={{
        borderWidth: 1,
        borderRadius: 5,
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

export default CustomInput;
