import { all, takeLatest, call, put, delay } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { Alert } from 'react-native';
import { api } from '../../services/api';
import { navigate } from '../../services/navigation';
import {
  Creators as AuthActions,
  Types as AuthTypes,
} from '../../store/ducks/auth';

function* signin(action) {
  try {
    const { email, password } = action.payload;

    const jsonData = {
      username: email,
      password,
    };

    const response = yield call(api.post, 'sessions', jsonData);

    AsyncStorage.setItem('token', response.data.token);
    yield put(AuthActions.saveToken(response.data.token));
    navigate('DrawerComponent');

    yield put(AuthActions.authSuccess(response.data.token, response.data.user));
  } catch (err) {
    yield put(AuthActions.authFailure(err));
  }
}

function* signup(action) {
  try {
    const { name, email, role, password } = action.payload;

    const jsonData = {
      name,
      email,
      role,
      password,
    };
    const response = yield call(api.post, 'users', jsonData);
    yield put(AuthActions.signUpSuccess(response.data));
    navigate('TeamRegistration');
  } catch (err) {
    yield put(AuthActions.signUpFailure(err));
  }
}

function* logout() {
  yield AsyncStorage.clear();
}

// function* requestProduct(action) {
//   try {
//     const { productId } = action.payload;
//     const response = yield call(apiOrder.get, `api/Product/${productId}`);

//     yield put(ProductActions.productSuccess(response.data));
//   } catch (err) {
//     if (err?.response?.data) {
//       yield put(ProductActions.productFailure(err?.response?.data?.errors[0]));
//     } else {
//       // Mensagens provisórias de erro
//       yield put(
//         ProductActions.productFailure('Ocorreu um erro ao buscar produto')
//       );
//     }
//   }
// }

// function* requestAllProducts(action) {
//   try {
//     const response = yield call(apiOrder.get, `api/Product`);

//     yield put(ProductActions.allProductSuccess(response.data));
//   } catch (err) {
//     if (err?.response?.data) {
//       yield put(
//         ProductActions.allProductFailure(err?.response?.data?.errors[0])
//       );
//     } else {
//       // Mensagens provisórias de erro
//       yield put(
//         ProductActions.allProductFailure('Ocorreu um erro ao buscar produtos')
//       );
//     }
//   }
// }

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.AUTH_REQUEST, signin),
    takeLatest(AuthTypes.SIGNUP_REQUEST, signup),
    takeLatest(AuthTypes.LOGOUT, logout),
  ]);
}
