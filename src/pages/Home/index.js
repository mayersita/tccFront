import React, { useEffect, useState } from 'react';

import { View, StatusBar, RefreshControl, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HeaderComponent from '../../components/Header';
import StoryComponent from '../../components/StoryComponent';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as StoryActions } from '../../store/ducks/story';
import { navigate } from '../../services/navigation';
import { Snackbar } from 'react-native-paper';
import {
  Container,
  SubContainer,
  TitleView,
  TitleText,
  List,
  FloatingAddButton,
  ListContainer,
} from './styles';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.story.loading);
  const success = useSelector((store) => store.story.success);
  const error = useSelector((store) => store.story.error);
  const errorDelete = useSelector((store) => store.story.errorDelete);
  const successDelete = useSelector((store) => store.story.successDelete);
  const myStories = useSelector((store) => store.story.data);
  const userId = useSelector((store) => store.auth.data._id);
  let page = useSelector((store) => store.story.page);
  const [visible, setVisible] = useState(false);
  const [snackMsg, setSnackMsg] = useState('');

  useEffect(() => {
    dispatch(StoryActions.clearStory());
  }, []);

  useEffect(() => {
    if (error) {
      setSnackMsg('Erro ao carregar histórias');
      setVisible(true);
    }

    if (errorDelete) {
      setSnackMsg('Erro ao excluir história');
      setVisible(true);
    }

    if (successDelete) {
      setSnackMsg('Excluído com sucesso!');
      setVisible(true);
      onRefresh();
    }
  }, [error, errorDelete, successDelete]);

  const onDismissSnackBar = () => {
    setVisible(false);
  };

  const onRefresh = () => {
    dispatch(StoryActions.myStoriesRequest(userId, 1));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('willFocus', () => {
      dispatch(StoryActions.myStoriesRequest(userId, 1));
    });
    return () => {
      unsubscribe.remove();
    };
  }, [navigation]);

  useEffect(() => {
    let loaded = true;
    if (loaded) {
      dispatch(StoryActions.myStoriesRequest(userId, 1));
    }
    return () => {
      loaded = false;
    };
  }, []);

  const handleLoadMore = () => {
    let nextPage = page + 1;
    dispatch(StoryActions.myStoriesRequest(userId, nextPage));
  };

  return (
    <>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#651296" />
        <HeaderComponent />
        <SubContainer>
          <TitleView>
            <TitleText>Suas histórias</TitleText>
          </TitleView>
        </SubContainer>
        <ListContainer>
          {myStories ? (
            <List
              data={myStories}
              keyExtractor={(item) => item._id}
              onEndReached={handleLoadMore}
              onEndReachedThreshold={0.5}
              refreshControl={
                <RefreshControl refreshing={loading} onRefresh={onRefresh} />
              }
              renderItem={({ item }) => <StoryComponent story={item} />}
            />
          ) : (
            <Text>Não há histórias escritas ainda!</Text>
          )}
        </ListContainer>
        <FloatingAddButton
          onPress={() => {
            navigate('NewStory');
          }}
        >
          <MaterialCommunityIcons
            name="plus-circle"
            size={60}
            color="#08AE9E"
          />
        </FloatingAddButton>
      </Container>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={3000}
        style={
          successDelete
            ? { backgroundColor: '#16522D' }
            : { backgroundColor: '#A30D0B' }
        }
      >
        {snackMsg}
      </Snackbar>
    </>
  );
};

export default Home;
