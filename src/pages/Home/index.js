import React, { useEffect } from 'react';

import { View, StatusBar, RefreshControl, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HeaderComponent from '../../components/Header';
import StoryComponent from '../../components/StoryComponent';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as StoryActions } from '../../store/ducks/story';
import { navigate } from '../../services/navigation';
import {
  Container,
  SubContainer,
  TitleView,
  TitleText,
  List,
  FloatingAddButton,
} from './styles';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.story.loading);
  const success = useSelector((store) => store.story.success);
  const error = useSelector((store) => store.story.error);
  const myStories = useSelector((store) => store.story.data);
  const userId = useSelector((store) => store.auth.data._id);
  let page = 1;

  const onRefresh = () => {
    dispatch(StoryActions.myStoriesRequest(userId, page));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('willFocus', () => {
      dispatch(StoryActions.myStoriesRequest(userId, page));
    });
    return () => {
      unsubscribe.remove();
    };
  }, [navigation]);

  useEffect(() => {
    let loaded = true;
    if (loaded) {
      dispatch(StoryActions.myStoriesRequest(userId, page));
    }
    return () => {
      loaded = false;
    };
  }, []);

  const handleLoadMore = () => {
    dispatch(StoryActions.myStoriesRequest(userId, page + 1));
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#651296" />
      <HeaderComponent />
      <SubContainer>
        <TitleView>
          <TitleText>Suas histórias</TitleText>
        </TitleView>
      </SubContainer>
      {myStories ? (
        <List
          data={myStories}
          keyExtractor={(item) => item._id}
          // onEndReached={myStories?.length >= 10 ? handleLoadMore : null}
          // onEndReachedThreshold={0.01}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={onRefresh} />
          }
          renderItem={({ item }) => <StoryComponent story={item} />}
        />
      ) : (
        <Text>Não há histórias escritas ainda!</Text>
      )}
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
