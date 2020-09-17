import { combineReducers } from 'redux';
import auth from './auth';
import teams from './teams';

const reducers = combineReducers({ auth, teams });

export default reducers;
