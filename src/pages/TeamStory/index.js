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

const TeamStory = () => {
  const teamStories = [
    {
      title: 'Story 1',
      preview:
        'Secondary line text Lorem ipsum dolor sit amet Secondary line text Lorem ipsum do...',
      author: 'Usuario 1',
      idAuthor: 1,
    },
    {
      title: 'Story 2',
      preview:
        'Secondary line text Lorem ipsum dolor sit amet Secondary line text Lorem ipsum do...',
      author: 'Usuario 2',
      idAuthor: 2,
    },
    {
      title: 'Story 3',
      preview:
        'Secondary line text Lorem ipsum dolor sit amet Secondary line text Lorem ipsum do...',
      author: 'Usuario 3',
      idAuthor: 3,
    },
    {
      title: 'Story 4',
      preview:
        'Secondary line text Lorem ipsum dolor sit amet Secondary line text Lorem ipsum do...',
      author: 'Usuario',
      idAuthor: 4,
    },
  ];

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#651296" />
      <HeaderComponent />
      <SubContainer>
        <TitleView>
          <TitleText>Histórias do time</TitleText>
        </TitleView>
      </SubContainer>
      <List
        data={teamStories}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <StoryComponent story={item} fromTeam />}
      />
    </Container>
  );
};

export default TeamStory;
