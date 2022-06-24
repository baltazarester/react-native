import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = ({ email, senha }) => {
    console.log(`Email: ${email} - Senha: ${senha}`);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto_entrada}>{'Bem-vindo'}</Text>
      <Input
        placeholder='E-mail'
        onChangeText={setEmail}
        value={email}
        leftIcon={<Icon name='user' color='#000000' type='font-awesome' size={24}
          placeholderTextColor={'black'}
        />}
      />
      <Input
        placeholder='Senha'
        onChangeText={setSenha}
        value={senha}
        leftIcon={<Icon name='key' color='#000000' type='font-awesome' size={24} />}
        placeholderTextColor={'black'}
      />
      <Button
        title='Entrar'
        onPress={() => handleLogin({ email, senha })}
        titleStyle={styles.buttons}
        buttonStyle={styles.buttons}
        containerStyle={styles.buttonsContainerStyle}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ec687e',
    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  texto_entrada: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10
  },
  inputs: {
    color: '#000',
  },
  buttons: {
    borderColor: '#f1b4be',
    borderRadius: 6,
  }
});

export default Login;