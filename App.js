import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'roboto-medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
    'roboto-regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return <Login />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'roboto-bold',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    fontFamily: 'roboto-regular',
    color: '#333333',
    marginBottom: 5,
  },
});
