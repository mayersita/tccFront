import React, { useState } from 'react';
import { Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { navigate } from '../../services/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as AuthActions } from '../../store/ducks/auth';

import {
  Container,
  LoginContainer,
  TextInput,
  SubmitButton,
  SignUpLink,
  SignUpLinkText,
} from './styles';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.auth.loadingSignUp);
  const success = useSelector((store) => store.auth.successSignUp);
  const error = useSelector((store) => store.auth.errorSignUp);

  function goToLogin() {
    navigate('Login');
  }

  function register() {
    dispatch(AuthActions.signUpRequest(name, email, role, password));
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
            placeholder="Função"
            autoCorrect={false}
            value={role}
            onChangeText={(text) => setRole(text)}
          />
          <TextInput
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            textContentType={'emailAddress'}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
          />
          <SubmitButton loading={loading} onPress={() => register()}>
            CADASTRAR
          </SubmitButton>
        </LoginContainer>
        <SignUpLink onPress={goToLogin}>
          <SignUpLinkText>Já tenho uma conta</SignUpLinkText>
        </SignUpLink>
      </Container>
    </>
  );
};

export default SignUp;
