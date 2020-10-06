import { combineReducers } from 'redux';
import auth from './auth';
import teams from './teams';
import story from './story';
import comments from './comments';

const reducers = combineReducers({ auth, teams, story, comments });

export default reducers;
