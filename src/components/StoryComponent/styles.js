import styled from 'styled-components/native';

export const Container = styled.View`
  height: 140px;
  background-color: #fff;
  border-color: #651296;
  border-width: 1px;
  margin-bottom: 5%;
  elevation: 5;
  margin: 10px;
`;

export const SubContainer = styled.View`
  margin-top: 5%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const TitleView = styled.View`
  width: 100%;
  height: 20%;
  padding: 4%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TitleText = styled.Text`
  color: #651296;
  font-family: 'roboto-medium';
  font-size: 20px;
  text-align: left;
`;

export const Line = styled.View`
  width: 90%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 4%;
`;

export const Description = styled.Text`
  color: #808080;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: 'roboto-regular';
  text-align: left;
  font-size: 14px;
`;

export const TextLink = styled.TouchableOpacity`
  width: 150px;
  align-items: center;
`;
export const TextLinkView = styled.View`
  width: 150px;
  align-items: center;
`;

export const TextSeeMore = styled.Text`
  color: #651296;
  font-family: 'roboto-medium';
  font-size: 14px;
`;

export const TextErase = styled.Text`
  color: #808080;
  font-family: 'roboto-regular';
  font-size: 14px;
`;
