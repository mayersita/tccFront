import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

const App = createStackNavigator(
  {
    Home,
  },
  {
    headerMode: 'none',
  }
);

export default createAppContainer(
  createSwitchNavigator({
    Login,
    SignUp,
    App,
  })
);
