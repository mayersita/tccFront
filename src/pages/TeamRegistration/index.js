import React, { useState, useEffect } from 'react';
import { Dimensions, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { navigate } from '../../services/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as TeamsActions } from '../../store/ducks/teams';
import { ActivityIndicator, Snackbar } from 'react-native-paper';

import {
  Container,
  LoginContainer,
  Title,
  OptionsView,
  Option,
  OptionTitle,
  Space,
  SubView,
  TeamTitle,
  InputField,
  TextInput,
  SendCode,
  TextInputDef,
  SubmitButton,
  SubViewLarge,
} from './styles';

const TeamRegistration = () => {
  const [option, setOption] = useState(null);
  const [visible, setVisible] = useState(false);
  const [snackBarMessage, setSnackbarMessage] = useState('');
  const [code, setCode] = useState('');
  const [teamName, setTeamName] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.teams.loading);
  const success = useSelector((store) => store.teams.success);
  const error = useSelector((store) => store.teams.error);

  const createTeam = () => {
    dispatch(TeamsActions.createTeamRequest(teamName, code));
  };

  const joinTeam = () => {
    dispatch(TeamsActions.joinTeamRequest(code));
  };

  useEffect(() => {
    onToggleSnackBar();
  }, [success, error]);

  const onToggleSnackBar = () => {
    if (success) {
      setVisible(!visible);
      setSnackbarMessage('Registrado com sucesso!');
    } else if (error) {
      setVisible(!visible);
      setSnackbarMessage('Ocorreu um erro!');
    }
  };

  const onDismissSnackBar = () => setVisible(false);

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
          <Title>Selecione uma das opções abaixo:</Title>
          <OptionsView>
            <Option onPress={() => setOption(1)}>
              <MaterialIcons
                name="group"
                size={40}
                color={option == 1 ? '#2fcc76' : '#fff'}
              />
              <OptionTitle>Entrar em time</OptionTitle>
            </Option>
            <Space />
            <Option onPress={() => setOption(2)}>
              <MaterialIcons
                name="group-add"
                size={40}
                color={option == 2 ? '#2fcc76' : '#fff'}
              />
              <OptionTitle>Criar time</OptionTitle>
            </Option>
          </OptionsView>
          {option == 1 && (
            <SubView>
              <TeamTitle>Digite o código do seu time:</TeamTitle>
              <InputField>
                <TextInput
                  autoCorrect={false}
                  value={code}
                  onChangeText={(text) => setCode(text)}
                  returnKeyType="send"
                />
              </InputField>
              <SendCode
                onPress={() => {
                  joinTeam();
                }}
              >
                {loading ? (
                  <ActivityIndicator animating={true} color="#fff" />
                ) : (
                  <MaterialIcons name="send" size={30} color="#2FCC76" />
                )}
              </SendCode>
            </SubView>
          )}
          {option == 2 && (
            <SubViewLarge>
              <TeamTitle>Crie um time:</TeamTitle>
              <TextInputDef
                placeholder="Nome do time"
                autoCorrect={false}
                value={teamName}
                onChangeText={(text) => setTeamName(text)}
              />
              <TextInputDef
                placeholder="Código de acesso"
                autoCorrect={false}
                textContentType={'emailAddress'}
                value={code}
                onChangeText={(text) => setCode(text)}
              />
              <SubmitButton
                loading={loading}
                onPress={() => {
                  createTeam();
                }}
              >
                CRIAR
              </SubmitButton>
            </SubViewLarge>
          )}
        </LoginContainer>
        <Snackbar
          visible={visible}
          duration={3000}
          onDismiss={onDismissSnackBar}
        >
          {snackBarMessage}
        </Snackbar>
      </Container>
    </>
  );
};

export default TeamRegistration;
