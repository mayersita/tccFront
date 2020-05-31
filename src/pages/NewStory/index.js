import React, { useState } from 'react';

import { StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import HeaderComponent from '../../components/Header';
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
        <Clickable onPress={() => {}}>
          <AntDesign name="closecircleo" size={35} color="#FC0F3B" />
        </Clickable>
        <Clickable onPress={() => {}}>
          <AntDesign name="check" size={35} color="#08AE9E" />
        </Clickable>
      </BottomButtons>
    </Container>
  );
};

export default NewStory;
