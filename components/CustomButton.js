import React from 'react';
import { Button } from 'react-native-elements';

const CustomButton = ({Text}) => {
  return (
    <Button
      title={Text}
      buttonStyle={{
        backgroundColor:"#28a745",
        marginVertical: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
      titleStyle={{
        color: 'white',
        fontSize: 16,
      }}
    />
  );[]
};

export default CustomButton;
