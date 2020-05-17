import React, { useState } from 'react';
import './config/ReactotronConfig';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });
};

const Index = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  // const Routes = createNavigator();
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </>
  );
};

export default Index;
