import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './rotas/HomeScreen';
import DetailsScreen from './rotas/DetailsScreen';
import CadastroScreen from './rotas/Cadastro';
import RecuperarSenha from './rotas/RecuperarSenha';
import PainelDePedido from './rotas/PainelDePedido';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer  >
      <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#A659BF' },
      }}
      
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen cardOverlayEnabled name="Recuperar Senha" component={RecuperarSenha} />
        <Stack.Screen name="Painel De Pedido" component={PainelDePedido} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}



export default App;
