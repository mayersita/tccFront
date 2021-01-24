import React, { useState, useEffect } from 'react';
import { Dimensions, Image, StatusBar, Alert, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as AuthActions } from '../../store/ducks/auth';
import { Snackbar } from 'react-native-paper';
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

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(AuthActions.clearStatus());
  }, []);

  useEffect(() => {
    if (error) setVisible(true);
  }, [error]);

  const onDismissSnackBar = () => {
    setVisible(false);
  };

  function createAccount() {
    navigation.navigate('SignUp');
  }
  function forgotPass() {
    Alert.alert('Ops!', 'Esta funcionalidade está em desenvolvimento!');
  }

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
            source={require('../../assets/logoNew-2-2.png')}
            resizeMethod={'resize'}
          />
          <View style={{height: 50}}/>
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
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={3000}
        style={{ backgroundColor: '#A30D0B' }}
      >
        Ocorreu um erro ao tentar logar!
      </Snackbar>
    </>
  );
};

export default Login;
