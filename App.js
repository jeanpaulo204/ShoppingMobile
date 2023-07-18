import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import HomeScreen from './rotas/HomeScreen';
import CadastroScreen from './rotas/Cadastro';
import RecuperarSenha from './rotas/RecuperarSenha';
import PainelDePedido from './rotas/PainelDePedido';

const Stack = createStackNavigator();

const transitionConfig = {
  animation: 'spring',
  config: {
    stiffness: 500,
    damping: 50,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#A659BF' },
          transitionSpec: {
            open: transitionConfig,
            close: transitionConfig,
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen
          name="Recuperar Senha"
          component={RecuperarSenha}
          options={{ cardOverlayEnabled: true }}
        />
        <Stack.Screen name="Painel De Pedido" component={PainelDePedido} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
