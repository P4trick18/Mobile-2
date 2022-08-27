import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Text>Registrar</Text>
      <Text>Primeiro nome:</Text>
      <Text>E-mail:</Text>
      <Text>Senha:</Text>
      <Text>Confirmar senha:</Text>
      <Text>Criar conta</Text>
      <Text>Ja tem uma conta? Faca Login</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',

  },

});
