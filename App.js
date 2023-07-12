import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './rotas/HomeScreen';
import DetailsScreen from './rotas/DetailsScreen';
import CadastroScreen from './rotas/Cadastro';
import RecuperarSenha from './rotas/RecuperarSenha';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Recuperar Senha" component={RecuperarSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
