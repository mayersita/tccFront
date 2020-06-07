import React from 'react';
import { ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { Container, PerfilBar, PerfilText, Item, Text } from './styles';
import { navigate } from '../../services/navigation';

const Drawer = () => {
  return (
    <Container>
      <PerfilBar>
        <PerfilText>Olá Usuário</PerfilText>
      </PerfilBar>
      <ScrollView>
        <Item
          onPress={() => {
            navigate('Home');
          }}
        >
          <MaterialCommunityIcons name="home" size={20} color="#08AE9E" />
          <Text>Home</Text>
        </Item>

        <Item
          onPress={() => {
            navigate('NewStory');
          }}
        >
          <MaterialCommunityIcons
            name="plus-circle"
            size={20}
            color="#08AE9E"
          />
          <Text>Escrever hitória</Text>
        </Item>
        <Item
          onPress={() => {
            navigate('TeamStory');
          }}
        >
          <MaterialCommunityIcons
            name="account-group"
            size={20}
            color="#08AE9E"
          />
          <Text>Equipe</Text>
        </Item>
      </ScrollView>
      <Item>
        <FontAwesome name="question-circle" size={20} color="#08AE9E" />
        <Text>Ajuda</Text>
      </Item>
      <Item
        onPress={() => {
          navigate('Login');
        }}
      >
        <MaterialCommunityIcons
          name="logout-variant"
          size={20}
          color="#08AE9E"
        />
        <Text>Sair</Text>
      </Item>
    </Container>
  );
};

export default Drawer;
