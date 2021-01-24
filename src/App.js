import React from 'react';
import Router from './routes';
import { setNavigator } from './services/navigation';

const App = () => {
  // const Router = createNavigator();
  return <Router ref={setNavigator} />;
};

export default App;
