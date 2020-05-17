import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { createWhitelistFilter } from 'redux-persist-transform-filter';
import { AsyncStorage } from 'react-native';
import Reactotron from '../config/ReactotronConfig';

import reducers from './ducks';
import sagas from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [];

const sagaMonitor = __DEV__ ? Reactotron.createSagaMonitor : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
  : compose(applyMiddleware(...middlewares));

const store = createStore(persistedReducer, composer);
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
