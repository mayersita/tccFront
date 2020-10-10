import React, { useState, useEffect } from 'react';
import { StatusBar, Alert } from 'react-native';
import HeaderComponent from '../../components/Header';
import { useSelector } from 'react-redux';

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
  const profile = useSelector((store) => store.auth.data);
  const [newProfile, setNewProfile] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    setNewProfile({
      name: profile?.name,
      email: profile?.email,
      role: profile?.role,
    });
  }, []);

  function save() {
    Alert.alert('Ops!', 'Esta funcionalidade está em desenvolvimento!');
  }
  console.tron.log(newProfile);
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
          <TextInput
            value={newProfile.email}
            onChangeText={(text) =>
              setNewProfile((prevState) => [...prevState, { email: text }])
            }
          />
        </TitleField>
        <Space />
        <TitleStory>Nome:</TitleStory>
        <Space />
        <TitleField>
          <TextInput
            value={newProfile.name}
            onChangeText={(text) =>
              setNewProfile((prevState) => [...prevState, { name: text }])
            }
          />
        </TitleField>
        <Space />
        <TitleStory>Função:</TitleStory>
        <Space />
        <TitleField>
          <TextInput
            value={newProfile.role}
            placeholder="Desenvolvedor, analista, design,etc..."
            onChangeText={(text) =>
              setNewProfile((prevState) => [...prevState, { role: text }])
            }
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
