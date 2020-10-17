import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const LoginContainer = styled.View`
  padding: 50px 40px 20px 40px;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
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
export const Space = styled.View`
  height: 15px;
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
