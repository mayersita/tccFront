import React, { useState, useEffect } from 'react';

import { StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import HeaderComponent from '../../components/Header';
import { Creators as StoryActions } from '../../store/ducks/story';
import { Creators as TeamsActions } from '../../store/ducks/teams';
import { Snackbar } from 'react-native-paper';
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
  const success = useSelector((store) => store.story.successCreation);
  const error = useSelector((store) => store.story.error);
  const userId = useSelector((store) => store.auth.data._id);
  const teamId = useSelector((store) => store.teams?.data?._id);
  const [visible, setVisible] = useState(false);
  const [snackMsg, setSnackMsg] = useState('');

  useEffect(() => {
    dispatch(StoryActions.clearStory());
  }, []);

  useEffect(() => {
    if (error) {
      setSnackMsg('Ocorreu um erro ao criar a historia!');
      setVisible(true);
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      setSnackMsg('História criada com sucesso!');
      setVisible(true);
    }
  }, [success]);

  useEffect(() => {
    dispatch(TeamsActions.teamByUserRequest(userId));
  }, []);

  const onDismissSnackBar = () => {
    setVisible(false);
    if (success) back();
  };

  const createStoryAction = () => {
    if (teamId) {
      dispatch(StoryActions.createStory(storyTitle, storyDescription, teamId));
    }
  };

  return (
    <>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#651296" />
        <HeaderComponent />
        <SubContainer>
          <TitleView>
            <TitleText>Nova história</TitleText>
          </TitleView>
        </SubContainer>
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
      </Container>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={3000}
        style={
          success
            ? { backgroundColor: '#16522D' }
            : { backgroundColor: '#A30D0B' }
        }
      >
        {snackMsg}
      </Snackbar>
    </>
  );
};

export default NewStory;
