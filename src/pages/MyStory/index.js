import React from 'react';

import { View, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import HeaderComponent from '../../components/Header';
import { FontAwesome } from '@expo/vector-icons';
import {
  Container,
  SubContainer,
  TitleView,
  TitleText,
  List,
  Scrollable,
  StoryText,
  CommentTitleView,
  TextComments,
  CommentView,
  UserProfile,
  UserInfo,
  CommentText,
  BottomButtons,
  Clickable,
} from './styles';

const MyStory = () => {
  const myStory = {
    title: 'Story 1',
    description:
      'Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.',
    author: 'Usuario',
    idAuthor: 1,
  };

  const comments = [
    {
      idUser: 1,
      userName: 'Usuario 1',
      commentDescription: 'Essa história está muito bem escrita!',
    },
    {
      idUser: 2,
      userName: 'Usuario 2',
      commentDescription: 'Essa história está curta, falta mais detalhes!',
    },
  ];

  function deleteStory() {}

  function editStory() {}

  function okStory() {}

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#651296" />
      <HeaderComponent />
      <SubContainer>
        <TitleView>
          <TitleText>{myStory.title}</TitleText>
        </TitleView>
      </SubContainer>
      <Scrollable>
        <StoryText>{myStory.description}</StoryText>
      </Scrollable>
      <CommentTitleView>
        <MaterialIcons name="chat" size={25} color="#2FCC76" />
        <TextComments>Comentários:</TextComments>
      </CommentTitleView>
      <List
        data={comments}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <CommentView>
            <UserProfile>
              <FontAwesome name="user-circle" size={25} color="#7D7D7D" />
              <UserInfo>{item.userName}:</UserInfo>
            </UserProfile>
            <CommentText>{item.commentDescription}</CommentText>
          </CommentView>
        )}
      />
      <BottomButtons>
        <Clickable onPress={() => {}}>
          <AntDesign name="closecircleo" size={35} color="#FC0F3B" />
        </Clickable>
        <Clickable onPress={() => {}}>
          <MaterialIcons name="edit" size={35} color="#08AE9E" />
        </Clickable>
        <Clickable onPress={() => {}}>
          <AntDesign name="check" size={35} color="#08AE9E" />
        </Clickable>
      </BottomButtons>
    </Container>
  );
};

export default MyStory;
