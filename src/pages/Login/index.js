import React, { useState, useEffect } from 'react';
import { Dimensions, Image, StatusBar, Alert } from 'react-native';
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
  const loading = useSelector((store) => store.auth.loading);
  const success = useSelector((store) => store.auth.success);
  const error = useSelector((store) => store.auth.error);

  useEffect(() => {
    if (error == true) Alert.alert('Ocorreu um erro ao logar!');
  }, [error]);
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
            autoCapitalize="none"
            textContentType={'emailAddress'}
            keyboardType={'email-address'}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <SubmitButton loading={loading} onPress={login}>
            ENTRAR
          </SubmitButton>
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
