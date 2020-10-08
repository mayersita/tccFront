import React, { useEffect } from 'react';

import { View, StatusBar, RefreshControl, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HeaderComponent from '../../components/Header';
import StoryComponent from '../../components/StoryComponent';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as StoryActions } from '../../store/ducks/story';
import { Creators as TeamsActions } from '../../store/ducks/teams';
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
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.story.loading);
  const success = useSelector((store) => store.story.success);
  const error = useSelector((store) => store.story.error);

  const userId = useSelector((store) => store.auth.data._id);

  const onRefresh = () => {
    if (teamId) {
      dispatch(StoryActions.requestStoryById(teamId));
    }
  };

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
      dispatch(StoryActions.requestStoryById(teamId));
    }
  }, [teamId]);

  const teamStories = useSelector((store) => store.story.dataById);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#651296" />
      <HeaderComponent />
      <SubContainer>
        <TitleView>
          <TitleText>Histórias do time</TitleText>
        </TitleView>
      </SubContainer>
      {teamStories ? (
        <List
          data={teamStories.docs}
          keyExtractor={(item) => item.title}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={onRefresh} />
          }
          renderItem={({ item }) => <StoryComponent story={item} fromTeam />}
        />
      ) : (
        <Text>Não há histórias a serem exibidas</Text>
      )}
    </Container>
  );
};

export default TeamStory;
