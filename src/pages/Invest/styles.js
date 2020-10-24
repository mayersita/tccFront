import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const SubContainer = styled.View`
  padding: 10px 5px 10px 5px;
`;

export const TitleView = styled.View`
  width: 100%;
  justify-content: center;
  height: 50px;
`;

export const TitleText = styled.Text`
  color: #434343;
  font-family: 'roboto-bold';
  font-size: 16px;
  text-align: center;
`;

export const ListContainer = styled.View`
  flex: 1;
  padding: 15px;
`;

export const WhatIs = styled.Text`
  text-align: center;
  color: #434343;
  font-family: 'roboto-bold';
  font-size: 15px;
`;

export const Description = styled.Text`
  padding-top: 10px;
  text-align: justify;
`;

export const ListItem = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Item = styled.Text`
    width: 100%;
    padding: 10px 15px;
    color: #651296;
    font-family: 'roboto-bold';
`;

export const LinkTo = styled.TouchableOpacity`
    margin-top: 20px;
    align-self: center;
    justify-content: center;
    width: 150px;
    height: 40px;
    border-radius: 15px;
    background-color: #08AE9E;
`;

export const TextLink = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 16px;
`;

