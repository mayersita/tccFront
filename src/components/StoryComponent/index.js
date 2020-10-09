import React from 'react';
import { Alert } from 'react-native';
import { navigate } from '../../services/navigation';
import { Creators as StoryActions } from '../../store/ducks/story';
import { useDispatch } from 'react-redux';

import { MaterialIcons } from '@expo/vector-icons';
import {
  Container,
  SubContainer,
  TitleView,
  TitleText,
  Line,
  Description,
  TextLink,
  TextSeeMore,
  TextErase,
} from './styles';

const StoryComponent = ({ story, fromTeam = false }) => {
  const dispatch = useDispatch();
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

  return (
    <Container>
      <TitleView>
        <TitleText>{story.title}</TitleText>
      </TitleView>
      <SubContainer>
        <Line>
          <Description>
            {story.description.substring(0, 81)} {'...'}
          </Description>
        </Line>
        <Line>
          {fromTeam ? (
            <TextLink>
              <TextErase>Autor: {story.author.name}</TextErase>
            </TextLink>
          ) : (
            <TextLink onPress={() => deleteStory(story._id)}>
              <TextErase>Apagar</TextErase>
            </TextLink>
          )}
          <TextLink
            onPress={() => {
              fromTeam
                ? navigate('StoryDetails', { story: story, fromTeam: true })
                : navigate('MyStory', { story: story });
            }}
          >
            <TextSeeMore>Ver mais</TextSeeMore>
          </TextLink>
        </Line>
      </SubContainer>
    </Container>
  );
};

export default StoryComponent;
