import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS == 'ios' ? 'padding' : 'padding',
})`
  flex: 1;
  padding: 50px 50px 20px 50px;
`;

export const LoginContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TextInput = styled(InputField)`
  margin-bottom: 15px;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
`;

export const ForgotPassLink = styled.TouchableOpacity`
  margin-top: 30px;
  align-self: flex-end;
`;

export const ForgotPassText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-family: 'roboto-regular';
  text-decoration-line: underline;
`;

export const SignUpLink = styled.TouchableOpacity`
  margin-top: 80px;
  align-self: center;
`;
export const SignUpLinkText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-family: 'roboto-regular';
  text-decoration-line: underline;
`;
