import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { View } from 'react-native';
// import createRouter from './routes';
import Login from './pages/Login';

// import { Container } from './styles';

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });
};

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  // const Routes = createRouter();
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return <Login />;
};

export default App;
