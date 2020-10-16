import React from 'react';
import { ScrollView, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import { Container, PerfilBar, PerfilText, Item, Text } from './styles';
import { navigate } from '../../services/navigation';

const Drawer = () => {
  const profileName = useSelector((store) => store.auth.data.name) ?? 'Usuário';
  return (
    <Container>
      <PerfilBar>
        <PerfilText>Olá {profileName}</PerfilText>
      </PerfilBar>
      <ScrollView>
        <Item
          onPress={() => {
            navigate('Home');
          }}
        >
          <MaterialCommunityIcons name="home" size={25} color="#08AE9E" />
          <Text>Home</Text>
        </Item>

        <Item
          onPress={() => {
            navigate('NewStory');
          }}
        >
          <MaterialCommunityIcons
            name="plus-circle"
            size={25}
            color="#08AE9E"
          />
          <Text>Escrever história</Text>
        </Item>
        <Item
          onPress={() => {
            navigate('TeamStory');
          }}
        >
          <MaterialCommunityIcons
            name="account-group"
            size={25}
            color="#08AE9E"
          />
          <Text>Equipe</Text>
        </Item>
      </ScrollView>
      <Item
        onPress={() => {
          Alert.alert(
            'Ocorreu um erro?',
            'Entre em contato com: nam@ecomp.poli.br'
          );
        }}
      >
        <FontAwesome name="question-circle" size={25} color="#08AE9E" />
        <Text>Ajuda</Text>
      </Item>
      <Item
        onPress={() => {
          navigate('Login');
        }}
      >
        <MaterialCommunityIcons
          name="logout-variant"
          size={25}
          color="#08AE9E"
        />
        <Text>Sair</Text>
      </Item>
    </Container>
  );
};

export default Drawer;
