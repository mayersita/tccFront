// import { all, takeLatest, call, put, delay } from 'redux-saga/effects';
// // import { AsyncStorage } from 'react-native';
// // import { Alert } from 'react-native';
// // import { api } from '~/services/api';
// // import { navigate } from '~/services/navigation';

// // function* signin(action) {
// //   try {
// //     const { email, password } = action.payload;

// //     const jsonData = {
// //       username: email,
// //       password,
// //     };

// //     const response = yield call(api.post, 'api/User/login', jsonData);

// //     AsyncStorage.setItem('token', response.data.token.tokenJWT);
// //     yield put(AuthActions.saveToken(response.data.token.tokenJWT));

// //     yield put(AuthActions.authSuccess(response.data.token, response.data.user));
// //   } catch (err) {
// //     if (err?.response?.data) {
// //       yield put(AuthActions.authFailure(err?.response?.data?.errors[0]));
// //     } else {
// //       // Mensagens provisórias de erro
// //       yield put(AuthActions.authFailure('Ocorreu um erro ao logar'));
// //     }
// //   }
// // }

// // function* signup(action) {
// //   try {
// //     const {
// //       name,
// //       email,
// //       phone,
// //       cpf,
// //       password,
// //       confirmPassword,
// //     } = action.payload;

// //     const jsonData = {
// //       name,
// //       email,
// //       phone,
// //       cpf,
// //       password,
// //       passwordConfirmation: confirmPassword,
// //     };

// //     const response = yield call(api.post, 'api/User/register', jsonData);

// //     AsyncStorage.setItem('token', response.data.token.tokenJWT);
// //     yield put(AuthActions.saveToken(response.data.token.tokenJWT));

// //     yield put(
// //       AuthActions.signUpSuccess(response.data.user, response.data.token)
// //     );
// //     // yield put(AuthActions.userSigned());
// //   } catch (err) {
// //     if (err?.response?.data) {
// //       yield put(AuthActions.signUpFailure(err?.response?.data?.errors[0]));
// //     } else {
// //       // Mensagens provisórias de erro
// //       yield put(AuthActions.signUpFailure('Ocorreu um erro ao cadastrar'));
// //     }
// //   }
// // }

// // function* logout() {
// //   yield AsyncStorage.clear();
// // }

// // function* requestProduct(action) {
// //   try {
// //     const { productId } = action.payload;
// //     const response = yield call(apiOrder.get, `api/Product/${productId}`);

// //     yield put(ProductActions.productSuccess(response.data));
// //   } catch (err) {
// //     if (err?.response?.data) {
// //       yield put(ProductActions.productFailure(err?.response?.data?.errors[0]));
// //     } else {
// //       // Mensagens provisórias de erro
// //       yield put(
// //         ProductActions.productFailure('Ocorreu um erro ao buscar produto')
// //       );
// //     }
// //   }
// // }

// // function* requestAllProducts(action) {
// //   try {
// //     const response = yield call(apiOrder.get, `api/Product`);

// //     yield put(ProductActions.allProductSuccess(response.data));
// //   } catch (err) {
// //     if (err?.response?.data) {
// //       yield put(
// //         ProductActions.allProductFailure(err?.response?.data?.errors[0])
// //       );
// //     } else {
// //       // Mensagens provisórias de erro
// //       yield put(
// //         ProductActions.allProductFailure('Ocorreu um erro ao buscar produtos')
// //       );
// //     }
// //   }
// // }

// export default function* rootSaga() {
//   return yield all([]);
// }
