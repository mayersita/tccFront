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
  flex-wrap: wrap;
`;

export const List = styled.FlatList``;

export const FloatingAddButton = styled.TouchableOpacity`
  align-self: center;
  position: absolute;
  bottom: 0%;
`;
