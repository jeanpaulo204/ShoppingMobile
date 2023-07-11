import React from 'react';
import { View, Button, Text } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Primeira Pagina</Text>
      <Button
        title="Proxima"
        onPress={() => navigation.navigate('Details')}
      />
    <Button
        title="LOGIN"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

export default HomeScreen;
