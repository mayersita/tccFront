import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { toggleDrawer } from '../../services/navigation';
import { navigate } from '../../services/navigation';
import { useSelector } from 'react-redux';
import { HeaderComp, Profile, User, MenuArea } from './styles';

const HeaderComponent = () => {
  const profileName = useSelector((store) => store.auth.data.name) ?? 'Usuário';
  return (
    <HeaderComp
      leftComponent={
        <MenuArea onPress={() => toggleDrawer()}>
          <MaterialIcons name="menu" size={25} color="white" />
        </MenuArea>
      }
      rightComponent={
        <Profile onPress={() => navigate('Profile')}>
          <User>{profileName}</User>
          <FontAwesome name="user-circle" size={30} color="white" />
        </Profile>
      }
    />
  );
};

export default HeaderComponent;
