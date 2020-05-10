import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 5px;
  height: 46px;
  background: #fff;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextcolor: '#808080',
  fontFamily: 'roboto-regular',
})`
  flex: 1;
  font-size: 12px;
  margin-left: 10px;
  font-family: 'roboto-regular';
  color: #434343;
`;
