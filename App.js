import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './rotas/HomeScreen';
import DetailsScreen from './rotas/DetailsScreen';
import LoginScreen from './rotas/Login';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer style={styles.Fundo}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Fundo: {
    backgroundColor: 'white'
  }
})

export default App;
