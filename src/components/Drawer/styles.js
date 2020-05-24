import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const PerfilBar = styled.View`
  width: 100%;
  height: 9%;
  background-color: #651296;
  padding-left: 10%;
  justify-content: center;
`;
export const PerfilText = styled.Text`
  color: #fff;
  font-family: 'roboto-bold';
  font-size: 16px;
`;
export const Item = styled.TouchableOpacity`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 10%;
  border-bottom-width: 1px;
  border-bottom-color: #c0c0c0;
`;
export const Text = styled.Text`
  color: #666666;
  font-size: 14px;
  font-family: 'roboto-bold';
  padding-left: 10px;
`;
export const Space = styled.View`
  height: 10px;
`;
