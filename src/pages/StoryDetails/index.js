import React, { useState, useEffect } from 'react';

import {
  View,
  StatusBar,
  TouchableOpacity,
  RefreshControl,
  Text,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import HeaderComponent from '../../components/Header';
import { Creators as CommentsActions } from '../../store/ducks/comments';
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

const StoryDetails = ({ navigation }) => {
  const [comment, setComment] = useState('');
  const story = navigation.getParam('story');
  const fromTeam = navigation.getParam('fromTeam');
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.comments.loading);
  const success = useSelector((store) => store.comments.success);
  const error = useSelector((store) => store.comments.error);

  const onRefresh = () => {
    dispatch(CommentsActions.getComments(story._id));
  };

  useEffect(() => {
    let loaded = true;
    if (loaded) {
      dispatch(CommentsActions.getComments(story._id));
    }
    return () => {
      loaded = false;
    };
  }, []);

  const commentsfromStory = useSelector((store) => store.comments.dataComments);

  function writeComment() {
    dispatch(CommentsActions.createComment(story._id, comment));
    setComment('');
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#651296" />
      <HeaderComponent />
      <SubContainer>
        <TitleView>
          <TitleText>{story.title}</TitleText>
          <SubText>
            Autor: {fromTeam ? story.author.name : story.author}
          </SubText>
        </TitleView>
      </SubContainer>
      <Scrollable>
        <StoryText>{story.description}</StoryText>
      </Scrollable>
      <CommentTitleView>
        <MaterialIcons name="chat" size={25} color="#2FCC76" />
        <TextComments>Comentários:</TextComments>
      </CommentTitleView>
      {commentsfromStory ? (
        <List
          data={commentsfromStory.docs}
          keyExtractor={(item) => item.title}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={onRefresh} />
          }
          renderItem={({ item }) => (
            <CommentView>
              <UserProfile>
                <FontAwesome name="user-circle" size={25} color="#7D7D7D" />
                <UserInfo>{item.user.name}:</UserInfo>
              </UserProfile>
              <CommentText>{item.description}</CommentText>
            </CommentView>
          )}
        />
      ) : (
        <Text>Ninguém comentou nessa história ainda...</Text>
      )}
      <Inputcontainer>
        <InputComment
          placeholder="Escreva um comentário..."
          value={commentsfromStory}
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
