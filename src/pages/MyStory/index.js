import React, { useState, useEffect } from 'react';

import { View, StatusBar, Alert, RefreshControl } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import HeaderComponent from '../../components/Header';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as StoryActions } from '../../store/ducks/story';
import { Creators as CommentsActions } from '../../store/ducks/comments';
import { Snackbar } from 'react-native-paper';
import { back } from '../../services/navigation';
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
  ListContainer,
} from './styles';

const MyStory = ({ navigation }) => {
  const dispatch = useDispatch();
  const story = navigation.getParam('story');
  const loading = useSelector((store) => store.story.loading);
  const success = useSelector((store) => store.story.success);
  const error = useSelector((store) => store.comments.error);
  const errorStory = useSelector((store) => store.story.error);

  const [errorMsg, setErroMsg] = useState('');

  let page = useSelector((store) => store.comments.page);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (error) {
      setErroMsg('Ocorreu um erro ao carregar os comentários!');
      setVisible(true);
    }
    if (errorStory) {
      setErroMsg('Ocorreu um erro ao apagar história!');
      setVisible(true);
    }
  }, [error, errorStory]);

  const onDismissSnackBar = () => {
    setVisible(false);
  };

  const onRefresh = () => {
    dispatch(CommentsActions.getComments(story._id));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('willFocus', () => {
      dispatch(CommentsActions.getComments(story._id, 1));
    });
    return () => {
      unsubscribe.remove();
    };
  }, [navigation]);

  useEffect(() => {
    let loaded = true;
    if (loaded) {
      dispatch(CommentsActions.getComments(story._id, 1));
    }
    return () => {
      loaded = false;
    };
  }, []);

  const handleLoadMore = () => {
    let nextPage = page + 1;
    dispatch(CommentsActions.getComments(story._id, nextPage));
  };

  const commentsfromStory = useSelector((store) => store.comments.dataComments);

  function deleteStory(storyId) {
    Alert.alert(
      'Tem certeza que deseja excluir?',
      '',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
            dispatch(StoryActions.deleteStory(storyId));
          },
        },
      ],
      { cancelable: false }
    );
  }

  function editStory() {}

  function okStory() {}

  return (
    <>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#651296" />
        <HeaderComponent />
        <SubContainer>
          <TitleView>
            <TitleText>{story.title}</TitleText>
          </TitleView>
        </SubContainer>
        <Scrollable>
          <StoryText>{story.description}</StoryText>
        </Scrollable>
        <CommentTitleView>
          <MaterialIcons name="chat" size={25} color="#2FCC76" />
          <TextComments>Comentários:</TextComments>
        </CommentTitleView>
        <ListContainer>
          <List
            data={commentsfromStory}
            keyExtractor={(item) => item.title}
            onEndReached={
              commentsfromStory?.length >= 10 ? handleLoadMore : null
            }
            onEndReachedThreshold={0.1}
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
        </ListContainer>
        <BottomButtons>
          <Clickable onPress={() => deleteStory(story._id)}>
            <FontAwesome name="trash" size={35} color="#FC0F3B" />
          </Clickable>
          <Clickable
            onPress={() => {
              Alert.alert(
                'Ops!',
                'Esta funcionalidade está em desenvolvimento!'
              );
            }}
          >
            <MaterialIcons name="edit" size={35} color="#08AE9E" />
          </Clickable>
          <Clickable onPress={() => back()}>
            <AntDesign name="checkcircle" size={35} color="#08AE9E" />
          </Clickable>
        </BottomButtons>
      </Container>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={3000}
        style={{ backgroundColor: '#A30D0B' }}
      >
        {errorMsg}
      </Snackbar>
    </>
  );
};

export default MyStory;
