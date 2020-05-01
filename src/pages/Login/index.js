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
  ForgotPassText,
  SignUpLinkText,
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
        <PasswordInput placeholder="Password" />
        <SubmitButton>ENTRAR</SubmitButton>
        <ForgotPassLink>
          <ForgotPassText>Esqueci a senha</ForgotPassText>
        </ForgotPassLink>
      </LoginContainer>
      <SignUpLink>
        <SignUpLinkText>Criar conta</SignUpLinkText>
      </SignUpLink>
    </Container>
  </>
);

export default Login;
