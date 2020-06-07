import React from 'react';
import { TouchableOpacity } from 'react-native';
import { navigate } from '../../services/navigation';

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

const StoryComponent = ({ story, fromTeam }) => {
  return (
    <Container>
      <TitleView>
        <TitleText>{story.title}</TitleText>
        <TouchableOpacity>
          <MaterialIcons name="edit" size={25} color="#7D7D7D" />
        </TouchableOpacity>
      </TitleView>
      <SubContainer>
        <Line>
          <Description>{story.preview}</Description>
        </Line>
        <Line>
          {fromTeam ? (
            <TextLink>
              <TextErase>Autor: {story.author}</TextErase>
            </TextLink>
          ) : (
            <TextLink>
              <TextErase>Apagar</TextErase>
            </TextLink>
          )}
          <TextLink
            onPress={() => {
              fromTeam ? navigate('StoryDetails') : navigate('MyStory');
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
