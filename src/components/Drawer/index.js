import React from 'react';
import { ScrollView, Alert , View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as AuthActions } from '../../store/ducks/auth';

import { Container, PerfilBar, PerfilText, Item, Text } from './styles';
import { navigate } from '../../services/navigation';

const Drawer = () => {
  const dispatch = useDispatch();
  const profileName = useSelector((store) => store.auth.data.name) ?? 'Usuário';
  
  const logoutAction = () => {
    dispatch(AuthActions.logout());
  }
  
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
        <Item
          onPress={() => {
            navigate('Invest');
          }}
        >
          <MaterialCommunityIcons
            name="book"
            size={25}
            color="#08AE9E"
          />
          <Text>INVEST</Text>
        </Item>
      </ScrollView>
      <View>
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
      <Item onPress={() => logoutAction()}>
        <MaterialCommunityIcons
          name="logout-variant"
          size={25}
          color="#08AE9E"
        />
        <Text>Sair</Text>
      </Item>
      </View>
    </Container>
  );
};

export default Drawer;
