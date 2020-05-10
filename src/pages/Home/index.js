import React from 'react';

import { View, StatusBar } from 'react-native';
import HeaderComponent from '../../components/Header';
import { Container, SubContainer, TitleView, TitleText, List } from './styles';

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
        <List />
      </SubContainer>
    </Container>
  );
};

export default Home;
