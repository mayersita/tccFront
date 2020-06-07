import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../../components/Button';
import InputFieldDef from '../../components/InputField';

export const Container = styled.View`
  flex: 1;
  padding: 50px 30px 20px 30px;
`;

export const LoginContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-family: 'roboto-bold';
  text-align: center;
`;
export const OptionsView = styled.View`
  flex-direction: row;
`;
export const Option = styled.TouchableOpacity`
  align-items: center;
  margin: 40px;
`;

export const OptionTitle = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-family: 'roboto-regular';
`;

export const Space = styled.View`
  width: 20px;
`;

export const SubView = styled.View`
  width: 100%;
  height: 200px;
  border-color: #fff;
  border-width: 1px;
  border-radius: 5px;
  align-items: center;
`;
export const TeamTitle = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-family: 'roboto-bold';
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const InputField = styled.View`
  background-color: #fff;
  width: 150px;
  height: 40px;
  margin: 20px;
  border-radius: 5px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextcolor: '#808080',
  fontFamily: 'roboto-regular',
})`
  font-size: 18px;
  margin-left: 10px;
  margin-top: 5px;
  font-family: 'roboto-regular';
  color: #000;
`;

export const SendCode = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding-left: 5px;
  margin-top: 20px;
`;

export const TextInputDef = styled(InputFieldDef)`
  margin: 20px 20px 10px 20px;
`;

export const SubmitButton = styled(Button)`
  width: 50%;
  margin-top: 20px;
`;

export const SubViewLarge = styled.View`
  width: 100%;
  height: 300px;
  border-color: #fff;
  border-width: 1px;
  border-radius: 5px;
  align-items: center;
`;
