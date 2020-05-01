import { createAppContainer, createSwitchNavigation } from 'react-navigation';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

export default createAppContainer(
  createSwitchNavigation(
    {
      Login,
      SignUp,
    },
    { initialRouteName: 'Login' }
  )
);
