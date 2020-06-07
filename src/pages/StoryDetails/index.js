import React, { useState } from 'react';

import { View, StatusBar, TouchableOpacity } from 'react-native';
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
  SubText,
  Inputcontainer,
  InputComment,
} from './styles';

const StoryDetails = () => {
  const [comment, setComment] = useState('');
  const storyInfo = {
    title: 'Story 1',
    description:
      'Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatur aliquam pharetra eget.',
    author: 'Usuario 1',
    idAuthor: 1,
  };

  const comments = [
    {
      idUser: 1,
      userName: 'Usuario 2',
      commentDescription: 'Essa história está muito bem escrita!',
    },
    {
      idUser: 2,
      userName: 'Usuario 3',
      commentDescription: 'Essa história está curta, falta mais detalhes!',
    },
  ];

  function writeComment() {
    comments.push({
      idUser: 4,
      userName: 'Usuario 4',
      commentDescription: comment,
    });
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#651296" />
      <HeaderComponent />
      <SubContainer>
        <TitleView>
          <TitleText>{storyInfo.title}</TitleText>
          <SubText>Autor: {storyInfo.author}</SubText>
        </TitleView>
      </SubContainer>
      <Scrollable>
        <StoryText>{storyInfo.description}</StoryText>
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
      <Inputcontainer>
        <InputComment
          placeholder="Escreva um comentário..."
          value={comment}
          autoCorrect={true}
          onChangeText={(text) => setComment(text)}
          returnKeyType="send"
        />
        <TouchableOpacity onPress={writeComment}>
          <MaterialIcons name="send" size={24} color="#2FCC76" />
        </TouchableOpacity>
      </Inputcontainer>
    </Container>
  );
};

export default StoryDetails;
