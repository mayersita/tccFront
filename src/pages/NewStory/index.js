import React, { useState } from 'react';

import { StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import HeaderComponent from '../../components/Header';
import { Creators as StoryActions } from '../../store/ducks/story';
import { Creators as TeamsActions } from '../../store/ducks/teams';
import { back } from '../../services/navigation';
import {
  Container,
  SubContainer,
  TitleView,
  TitleText,
  BottomButtons,
  Clickable,
  ContView,
  TitleField,
  TitleStory,
  TextInput,
  DescField,
  LargeTextInput,
  Space,
} from './styles';

const NewStory = () => {
  const [storyTitle, setStoryTitle] = useState('');
  const [storyDescription, setStoryDescription] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.story.loading);
  const success = useSelector((store) => store.story.success);
  const error = useSelector((store) => store.story.error);
  const userId = useSelector((store) => store.auth.data._id);
  const teamId = useSelector((store) => store.teams?.data?._id);

  const createStoryAction = () => {
    dispatch(TeamsActions.teamByUserRequest(userId));
    if (teamId) {
      dispatch(StoryActions.createStory(storyTitle, storyDescription, teamId));
    }
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#651296" />
      <HeaderComponent />
      <SubContainer>
        <TitleView>
          <TitleText>Nova história</TitleText>
        </TitleView>
      </SubContainer>
      <ContView>
        <TitleStory>Título:</TitleStory>
        <Space />
        <TitleField>
          <TextInput
            value={storyTitle}
            onChangeText={(text) => setStoryTitle(text)}
          />
        </TitleField>
        <Space />
        <TitleStory>Descrição:</TitleStory>
        <Space />
        <DescField>
          <LargeTextInput
            value={storyDescription}
            multiline
            placeholder="Descrição da história detalhada"
            onChangeText={(text) => setStoryDescription(text)}
          />
        </DescField>
      </ContView>
      <Space />
      <BottomButtons>
        <Clickable onPress={() => back()}>
          <AntDesign name="closecircleo" size={35} color="#FC0F3B" />
        </Clickable>
        <Clickable
          onPress={() => {
            createStoryAction();
          }}
        >
          <AntDesign name="check" size={35} color="#08AE9E" />
        </Clickable>
      </BottomButtons>
    </Container>
  );
};

export default NewStory;
