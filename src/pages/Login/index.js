import React from 'react';
import { Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import {
  Container,
  LoginContainer,
  LoginInput,
  PasswordInput,
  SubmitButton,
  ForgotPassLink,
  SignUpLink,
} from './styles';

const Login = () => (
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
        <LoginInput placeholder="Login" />
        <PasswordInput placeholder="Login" />
        <SubmitButton>ENTRAR</SubmitButton>
        <ForgotPassLink>Esqueci a senha</ForgotPassLink>
      </LoginContainer>
      <SignUpLink>Criar conta</SignUpLink>
    </Container>
  </>
);

export default Login;
