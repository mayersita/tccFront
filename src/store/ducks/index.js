import { combineReducers } from 'redux';
import auth from './auth';
import teams from './teams';
import story from './story';

const reducers = combineReducers({ auth, teams, story });

export default reducers;
