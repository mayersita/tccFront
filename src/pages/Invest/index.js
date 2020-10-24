import React, { useEffect, useState } from 'react';

import { View, StatusBar, Text } from 'react-native';
import HeaderComponent from '../../components/Header';
import * as WebBrowser from 'expo-web-browser';
import {
  Container,
  SubContainer,
  TitleView,
  TitleText,
  ListContainer,
  WhatIs,
  Description,
  ListItem,
  Item,
  LinkTo,
  TextLink
} from './styles';

const Invest = ({ navigation }) => {

   const handleOpenWithWebBrowser = () => {
        WebBrowser.openBrowserAsync('https://incuca.net/conheca-o-invest-e-descubra-como-escrever-boas-historias-de-usuarios/');
      };

  return (
    <>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#651296" />
        <HeaderComponent />
        <SubContainer>
          <TitleView>
            <TitleText>INVEST</TitleText>
          </TitleView>
        </SubContainer>
        <ListContainer>
            <WhatIs>O que é o INVEST?</WhatIs>
            <Description>
                É um acrônimo que descreve os critérios de aceitação que uma user story deve ter:
            </Description>
            <ListItem>
                <Item>“I” ndependent</Item>
                <Item>“N” egotiable</Item>
                <Item>“V” aluable</Item>
                <Item>“E” stimable</Item>
                <Item>“S” mall</Item>
                <Item>“T” estable</Item>
            </ListItem>
            <Description>
                Ao avaliar as histórias do time você escolhe um desses critérios!
            </Description>
            <LinkTo onPress={() => handleOpenWithWebBrowser()}>
                <TextLink>
                  Saiba mais
                </TextLink>
            </LinkTo>
        </ListContainer>
      </Container>
    </>
  );
};

export default Invest;
