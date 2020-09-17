import { all, takeLatest, call, put, delay } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { Alert } from 'react-native';
import { api } from '../../services/api';
import { navigate } from '../../services/navigation';
import {
  Creators as AuthActions,
  Types as AuthTypes,
} from '../../store/ducks/auth';

import {
  Creators as TeamsActions,
  Types as TeamsTypes,
} from '../../store/ducks/teams';

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
    AsyncStorage.setItem('token', response.data.token);
    yield put(AuthActions.saveToken(response.data.token));
    navigate('TeamRegistration');
  } catch (err) {
    yield put(AuthActions.signUpFailure(err));
  }
}

function* logout() {
  yield AsyncStorage.clear();
}

function* createTeam(action) {
  try {
    const { name, code } = action.payload;
    const response = yield call(api.post, 'teams', { name, code });
    yield put(TeamsActions.createTeamSuccess());
  } catch (err) {
    yield put(TeamsActions.createTeamFailure(err));
  }
}

function* joinTeam(action) {
  try {
    const { code } = action.payload;
    const response = yield call(api.put, `teams/${code}`);
    yield put(TeamsActions.joinTeamSuccess());
  } catch (err) {
    yield put(TeamsActions.joinTeamFailure(err));
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.AUTH_REQUEST, signin),
    takeLatest(AuthTypes.SIGNUP_REQUEST, signup),
    takeLatest(AuthTypes.LOGOUT, logout),

    takeLatest(TeamsTypes.CREATE_TEAM_REQUEST, createTeam),
    takeLatest(TeamsTypes.JOIN_TEAM_REQUEST, joinTeam),
  ]);
}
