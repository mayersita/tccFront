import styled from 'styled-components/native';

export const Container = styled.View`
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
  color: #651296;
  font-family: 'roboto-bold';
  font-size: 20px;
  text-align: center;
`;

export const ListContainer = styled.View`
  flex: 1;
  flex-wrap: wrap;
`;
export const List = styled.FlatList``;

export const Scrollable = styled.ScrollView`
  min-height: 35%;
  padding: 10px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px;

  border-color: #651296;
  border-width: 1px;
`;

export const StoryText = styled.Text`
  color: #808080;
  font-family: 'roboto-regular';
  font-size: 14px;
  text-align: justify;
`;

export const CommentTitleView = styled.View`
  margin: 15px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const TextComments = styled.Text`
  color: #808080;
  font-size: 14px;
  font-family: 'roboto-regular';
  padding-left: 10px;
`;

export const CommentView = styled.View`
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 20px;
  background-color: #efefef;
  padding: 15px;
  border-radius: 5px;
  min-height: 50px;
`;

export const UserProfile = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const UserInfo = styled.Text`
  padding-left: 10px;
  color: #404040;
  font-size: 14px;
  font-family: 'roboto-bold';
  padding-left: 10px;
`;

export const CommentText = styled.Text`
  color: #808080;
  font-size: 14px;
  font-family: 'roboto-regular';
  padding-left: 35px;
`;

export const BottomButtons = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Clickable = styled.TouchableOpacity`
  padding: 20px;
`;

export const SubText = styled.Text`
  color: #808080;
  font-size: 14px;
  font-family: 'roboto-regular';
  text-align: center;
`;

export const Inputcontainer = styled.View`
  padding: 5px;
  height: 45px;
  background-color: #efefef;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 20px;
`;
export const InputComment = styled.TextInput.attrs({
  placeholderTextcolor: '#808080',
  fontFamily: 'roboto-regular',
})`
  flex: 1;
  font-size: 12px;
  margin-left: 10px;
  font-family: 'roboto-regular';
  color: #434343;
`;
