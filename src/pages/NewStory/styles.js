import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const SubContainer = styled.View`
  padding: 10px 5px 0px 5px;
`;

export const TitleView = styled.View`
  width: 100%;
  justify-content: center;
  height: 50px;
`;

export const TitleText = styled.Text`
  color: #434343;
  font-family: 'roboto-bold';
  font-size: 18px;
  text-align: center;
`;

export const BottomButtons = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 15%;
  padding-right: 15%;
`;

export const Clickable = styled.TouchableOpacity`
  padding: 10px;
`;

export const ContView = styled.View`
  margin: 10px 30px 0px 30px;
`;
export const TitleField = styled.View`
  background-color: #efefef;
  border-radius: 5px;
  padding: 5px;
  height: 35px;
`;
export const TitleStory = styled.Text`
  font-size: 14px;
  color: #404040;
  font-family: 'roboto-regular';
`;
export const TextInput = styled.TextInput.attrs({
  placeholderTextcolor: '#808080',
  fontFamily: 'roboto-regular',
  textAlignVertical: 'top',
})`
  flex: 1;
  font-size: 15px;
  font-family: 'roboto-regular';
  color: #434343;
`;
export const DescField = styled.View`
  background-color: #efefef;
  border-radius: 5px;
  padding: 5px;
  height: 300px;
`;

export const LargeTextInput = styled.TextInput.attrs({
  placeholderTextcolor: '#808080',
  fontFamily: 'roboto-regular',
  textAlignVertical: 'top',
})`
  flex: 1;
  font-size: 15px;
  font-family: 'roboto-regular';
  color: #434343;
`;

export const Space = styled.View`
  height: 15px;
`;
