import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { toggleDrawer } from '../../services/navigation';

import { HeaderComp, Profile, User, MenuArea } from './styles';

const HeaderComponent = () => {
  return (
    <HeaderComp
      leftComponent={
        <MenuArea onPress={() => toggleDrawer()}>
          <MaterialIcons name="menu" size={25} color="white" />
        </MenuArea>
      }
      rightComponent={
        <Profile>
          <User>Olá Usuário</User>
          <FontAwesome name="user-circle" size={30} color="white" />
        </Profile>
      }
    />
  );
};

export default HeaderComponent;
