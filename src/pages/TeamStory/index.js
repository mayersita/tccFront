import React, { useEffect, useState } from 'react';

import { View, StatusBar, RefreshControl, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HeaderComponent from '../../components/Header';
import StoryComponent from '../../components/StoryComponent';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as StoryActions } from '../../store/ducks/story';
import { Creators as TeamsActions } from '../../store/ducks/teams';
import { navigate } from '../../services/navigation';
import { Snackbar } from 'react-native-paper';
import {
  Container,
  SubContainer,
  TitleView,
  TitleText,
  List,
  ListContainer,
  FloatingAddButton,
} from './styles';

const TeamStory = ({ navigation }) => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.story.loading);
  const success = useSelector((store) => store.story.success);
  const error = useSelector((store) => store.story.error);
  let page = useSelector((store) => store.story.page);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(StoryActions.clearStory());
  }, []);

  useEffect(() => {
    if (error) setVisible(true);
  }, [error]);

  const onDismissSnackBar = () => {
    setVisible(false);
  };

  const userId = useSelector((store) => store.auth.data._id);

  const onRefresh = () => {
    if (teamId) {
      dispatch(StoryActions.requestStoryById(teamId, 1));
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('willFocus', () => {
      dispatch(StoryActions.requestStoryById(teamId, 1));
    });
    return () => {
      unsubscribe.remove();
    };
  }, [navigation]);

  useEffect(() => {
    let loaded = true;
    if (loaded) {
      dispatch(TeamsActions.teamByUserRequest(userId));
    }
    return () => {
      loaded = false;
    };
  }, []);

  const teamId = useSelector((store) => store.teams?.data?._id) ?? null;

  useEffect(() => {
    if (teamId) {
      dispatch(StoryActions.requestStoryById(teamId, 1));
    }
  }, [teamId]);

  const handleLoadMore = () => {
    let nextPage = page + 1;
    dispatch(StoryActions.requestStoryById(teamId, nextPage));
  };

  const teamStories = useSelector((store) => store.story.dataById);

  return (
    <>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#651296" />
        <HeaderComponent />
        <SubContainer>
          <TitleView>
            <TitleText>Histórias do time</TitleText>
          </TitleView>
        </SubContainer>
        <ListContainer>
          {teamStories ? (
            <List
              data={teamStories}
              keyExtractor={(item) => item._id}
              onEndReached={teamStories?.length >= 10 ? handleLoadMore : null}
              onEndReachedThreshold={0.1}
              refreshControl={
                <RefreshControl refreshing={loading} onRefresh={onRefresh} />
              }
              renderItem={({ item }) => (
                <StoryComponent story={item} fromTeam />
              )}
            />
          ) : (
            <Text>Não há histórias a serem exibidas</Text>
          )}
        </ListContainer>
      </Container>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={3000}
        style={{ backgroundColor: '#A30D0B' }}
      >
        Erro ao carregar histórias!
      </Snackbar>
    </>
  );
};

export default TeamStory;
