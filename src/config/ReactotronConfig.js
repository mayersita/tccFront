import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.0.107' })
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  console.tron = tron;
  tron.clear();
  // Caso fique sem aparecer nada colocar isso dentro do configure { host: '172.27.139.180' }
}
