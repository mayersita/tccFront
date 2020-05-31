import React, { useState } from 'react';
import { Dimensions, Image } from 'react-native';
import { StatusBar } from 'react-native';
import HeaderComponent from '../../components/Header';

import {
  Container,
  LoginContainer,
  TextInput,
  SubmitButton,
  TitleField,
  TitleStory,
  Space,
  SubContainer,
  TitleView,
  TitleText,
} from './styles';

const Profile = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  function save() {}

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#651296" />
      <HeaderComponent />
      <SubContainer>
        <TitleView>
          <TitleText>Editar Perfil</TitleText>
        </TitleView>
      </SubContainer>
      <LoginContainer>
        <TitleStory>Email:</TitleStory>
        <Space />
        <TitleField>
          <TextInput value={email} onChangeText={(text) => setEmail(text)} />
        </TitleField>
        <Space />
        <TitleStory>Nome:</TitleStory>
        <Space />
        <TitleField>
          <TextInput value={name} onChangeText={(text) => setName(text)} />
        </TitleField>
        <Space />
        <TitleStory>Função:</TitleStory>
        <Space />
        <TitleField>
          <TextInput
            value={role}
            placeholder="Desenvolvedor, analista, design,etc..."
            onChangeText={(text) => setRole(text)}
          />
        </TitleField>
        <Space />
        <Space />
        <SubmitButton onPress={save}>SALVAR</SubmitButton>
      </LoginContainer>
    </Container>
  );
};

export default Profile;
