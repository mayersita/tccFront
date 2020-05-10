import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { HeaderComp, Profile, User, MenuArea } from './styles';

const HeaderComponent = () => {
  return (
    <HeaderComp
      leftComponent={
        <Profile>
          <FontAwesome name="user-circle" size={30} color="white" />
          <User>Olá Usuário</User>
        </Profile>
      }
      rightComponent={
        <MenuArea>
          <MaterialIcons name="menu" size={25} color="white" />
        </MenuArea>
      }
    />
  );
};

export default HeaderComponent;
