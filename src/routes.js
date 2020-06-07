import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import MyStory from './pages/MyStory';
import NewStory from './pages/NewStory';
import Drawer from './components/Drawer';
import Profile from './pages/Profile';
import TeamStory from './pages/TeamStory';
import StoryDetails from './pages/StoryDetails';
import TeamRegistration from './pages/TeamRegistration';

const AppMain = createStackNavigator(
  {
    Home,
    MyStory,
    NewStory,
    Profile,
    TeamStory,
    StoryDetails,
    TeamRegistration,
  },
  {
    headerMode: 'none',
  }
);

const DrawerComponent = createDrawerNavigator(
  {
    AppMain,
  },
  {
    drawerWidth: '65%',
    contentComponent: Drawer,
  }
);

export default createAppContainer(
  createSwitchNavigator({
    Login,
    SignUp,
    DrawerComponent,
  })
);
