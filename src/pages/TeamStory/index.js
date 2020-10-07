import React, { useEffect } from 'react';

import { View, StatusBar } from 'react-native';
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

  useEffect(() => {
    let loaded = true;
    if (loaded) {
      dispatch(TeamsActions.teamByUserRequest(userId));
    }
    return () => {
      loaded = false;
    };
  }, []);

  const teamId = useSelector((store) => store.teams.data._id);

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
      <List
        data={teamStories}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <StoryComponent story={item} fromTeam />}
      />
    </Container>
  );
};

export default TeamStory;
