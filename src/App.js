import React from 'react';
import createNavigator from './routes';
import { setNavigator } from './services/navigation';

const App = () => {
  const Router = createNavigator();
  return <Router ref={setNavigator} />;
};

export default App;
