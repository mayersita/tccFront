import React, { useState } from 'react';
import { Dimensions, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as AuthActions } from '../../store/ducks/auth';
import {
  Container,
  LoginContainer,
  TextInput,
  SubmitButton,
  ForgotPassLink,
  ForgotPassText,
  SignUpLinkText,
  SignUpLink,
} from './styles';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function createAccount() {
    navigation.navigate('SignUp');
  }
  function forgotPass() {}

  function login() {
    dispatch(AuthActions.authRequest(email, password));
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
        <StatusBar barStyle="light-content" backgroundColor="#651296" />
        <LoginContainer>
          <Image
            source={require('../../assets/logo.png')}
            resizeMethod={'resize'}
          />
          <TextInput
            placeholder="Login"
            value={email}
            autoCorrect={false}
            textContentType={'emailAddress'}
            keyboardType={'email-address'}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <SubmitButton onPress={login}>ENTRAR</SubmitButton>
          <ForgotPassLink onPress={forgotPass}>
            <ForgotPassText>Esqueci a senha</ForgotPassText>
          </ForgotPassLink>
        </LoginContainer>
        <SignUpLink onPress={createAccount}>
          <SignUpLinkText>Criar conta</SignUpLinkText>
        </SignUpLink>
      </Container>
    </>
  );
};

export default Login;
