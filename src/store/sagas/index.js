import { all, takeLatest, call, put, delay } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { Alert } from 'react-native';
import { api } from '../../services/api';
import { navigate, back } from '../../services/navigation';
import {
  Creators as AuthActions,
  Types as AuthTypes,
} from '../../store/ducks/auth';

import {
  Creators as TeamsActions,
  Types as TeamsTypes,
} from '../../store/ducks/teams';

import {
  Creators as StoryActions,
  Types as StoryTypes,
} from '../../store/ducks/story';

import {
  Creators as CommentsActions,
  Types as CommentsTypes,
} from '../../store/ducks/comments';

function* signin(action) {
  try {
    const { email, password } = action.payload;

    const jsonData = {
      email,
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

function* createStory(action) {
  try {
    const { title, description, teamId } = action.payload;
    const response = yield call(api.post, 'stories', {
      title,
      description,
      team: teamId,
    });
    yield put(StoryActions.createStorySuccess());
  } catch (err) {
    yield put(StoryActions.createStoryFailure(err));
  }
}

function* deleteStory(action) {
  try {
    const { storyId } = action.payload;
    const response = yield call(api.delete, `stories/${storyId}`);
    yield put(StoryActions.deleteStorySuccess());
    back();
  } catch (err) {
    yield put(StoryActions.deleteStoryFailure(err));
  }
}

function* getMyStories(action) {
  try {
    const { userId, page } = action.payload;
    const response = yield call(api.post, `/stories/user?page=${page}`, {
      user: userId,
    });
    yield put(StoryActions.myStoriesSuccess(response.data));
  } catch (err) {
    yield put(StoryActions.myStoriesFailure(err));
  }
}

function* getTeamIdByUser(action) {
  try {
    const { userId } = action.payload;
    const response = yield call(api.post, `/teams/byUser`, {
      id: userId,
    });
    yield put(TeamsActions.teamByUserSuccess(response.data[0]));
  } catch (err) {
    yield put(TeamsActions.teamByUserFailure(err));
  }
}

function* getStoriesByTeamId(action) {
  try {
    const { teamId, page } = action.payload;
    const response = yield call(
      api.get,
      `/stories/team/${teamId}?page=${page}`
    );
    yield put(StoryActions.requestStoryByIdSuccess(response.data));
  } catch (err) {
    yield put(StoryActions.requestStoryByIdFailure(err));
  }
}

function* commentOnStory(action) {
  try {
    const { storyId, description } = action.payload;
    const response = yield call(api.post, `comments`, {
      story: storyId,
      description: description,
    });
    yield put(CommentsActions.createCommentSuccess(response.data));
  } catch (err) {
    yield put(CommentsActions.createCommentFailure(err));
  }
}

function* getCommentsFromStory(action) {
  try {
    const { storyId, page } = action.payload;
    const response = yield call(
      api.post,
      `comments/story/${storyId}?page=${page}`
    );
    yield put(CommentsActions.getCommentsSuccess(response.data));
  } catch (err) {
    yield put(CommentsActions.getCommentsFailure(err));
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.AUTH_REQUEST, signin),
    takeLatest(AuthTypes.SIGNUP_REQUEST, signup),
    takeLatest(AuthTypes.LOGOUT, logout),

    takeLatest(TeamsTypes.CREATE_TEAM_REQUEST, createTeam),
    takeLatest(TeamsTypes.JOIN_TEAM_REQUEST, joinTeam),
    takeLatest(TeamsTypes.REQUEST_TEAM_BYUSER, getTeamIdByUser),

    takeLatest(StoryTypes.CREATE_STORY_REQUEST, createStory),
    takeLatest(StoryTypes.DELETE_STORY, deleteStory),
    takeLatest(StoryTypes.MY_STORIES_REQUEST, getMyStories),
    takeLatest(StoryTypes.STORIES_REQUEST_BYID, getStoriesByTeamId),

    takeLatest(CommentsTypes.CREATE_COMMENT_REQUEST, commentOnStory),
    takeLatest(CommentsTypes.GET_COMMENT_FROM_STORY, getCommentsFromStory),
  ]);
}
