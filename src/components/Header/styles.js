import styled from 'styled-components/native';
import { Header } from 'react-native-elements';

export const HeaderComp = styled(Header).attrs({
  containerStyle: {
    backgroundColor: '#651296',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
  },
})``;

export const Profile = styled.TouchableOpacity`
  width: 120px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const User = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: 'roboto-bold';
`;

export const MenuArea = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;
