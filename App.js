import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.batata}>
        <Text style={styles.texto}><strong>Login</strong></Text>
        <TextInput style={styles.input} placeholder="alguma coisa "/> 
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  batata: {
    height: 250,
    width: 250,
    backgroundColor:  'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    flex: 1,
    fontSize: '23px',
  },
  input: {
    backgroundColor: 'white',
  }
});
