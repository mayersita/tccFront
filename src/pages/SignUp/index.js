import React, { useState } from 'react';
import { Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import {
  Container,
  LoginContainer,
  TextInput,
  SubmitButton,
  SignUpLink,
  SignUpLinkText,
} from './styles';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function goToLogin() {
    navigation.navigate('Login');
  }

  return (
    <>
      <LinearGradient
        colors={['#651296', '#666798']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: Dimensions.get('screen').height,
        }}
      />
      <Container>
        <LoginContainer>
          <Image
            source={require('../../assets/logo.png')}
            resizeMethod={'resize'}
          />
          <TextInput
            placeholder="Nome"
            autoCorrect={false}
            textContentType={'name'}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            placeholder="Login"
            autoCorrect={false}
            textContentType={'emailAddress'}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <SubmitButton>CADASTRAR</SubmitButton>
        </LoginContainer>
        <SignUpLink onPress={goToLogin}>
          <SignUpLinkText>Já tenho uma conta</SignUpLinkText>
        </SignUpLink>
      </Container>
    </>
  );
};

export default SignUp;
