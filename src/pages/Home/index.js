import React from 'react';

import { View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HeaderComponent from '../../components/Header';
import StoryComponent from '../../components/StoryComponent';
import { navigate } from '../../services/navigation';
import {
  Container,
  SubContainer,
  TitleView,
  TitleText,
  List,
  FloatingAddButton,
} from './styles';

const Home = () => {
  const myStories = [
    {
      title: 'Story 1',
      preview:
        'Secondary line text Lorem ipsum dolor sit amet Secondary line text Lorem ipsum do...',
      author: 'Usuario',
      idAuthor: 1,
    },
    {
      title: 'Story 2',
      preview:
        'Secondary line text Lorem ipsum dolor sit amet Secondary line text Lorem ipsum do...',
      author: 'Usuario',
      idAuthor: 1,
    },
    {
      title: 'Story 3',
      preview:
        'Secondary line text Lorem ipsum dolor sit amet Secondary line text Lorem ipsum do...',
      author: 'Usuario',
      idAuthor: 1,
    },
    {
      title: 'Story 4',
      preview:
        'Secondary line text Lorem ipsum dolor sit amet Secondary line text Lorem ipsum do...',
      author: 'Usuario',
      idAuthor: 1,
    },
  ];

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#651296" />
      <HeaderComponent />
      <SubContainer>
        <TitleView>
          <TitleText>Suas histórias</TitleText>
        </TitleView>
      </SubContainer>
      <List
        data={myStories}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <StoryComponent story={item} />}
      />
      <FloatingAddButton
        onPress={() => {
          navigate('NewStory');
        }}
      >
        <MaterialCommunityIcons name="plus-circle" size={60} color="#08AE9E" />
      </FloatingAddButton>
    </Container>
  );
};

export default Home;
