import axios from 'axios';
import { Alert, AsyncStorage } from 'react-native';
import { getSocialId, getToken } from '~/utils/socialAuth';
import { navigate } from './navigation';

const baseURL = 'localhost:3001/';

const api = axios.create({
  baseURL,
});

export { api, baseURL };
