import React from 'react';
import { TouchableOpacity } from 'react-native';

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

const StoryComponent = ({ story }) => {
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
          <TextLink>
            <TextSeeMore>Ver mais</TextSeeMore>
          </TextLink>
          <TextLink>
            <TextErase>Apagar</TextErase>
          </TextLink>
        </Line>
      </SubContainer>
    </Container>
  );
};

export default StoryComponent;
