import axios from 'axios';
import { getToken } from '../utils/authUtils';

const baseURL = 'http://192.168.0.116:3000/api/';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  async function (config) {
    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = `Bearer ${await getToken()}`;
    return config;
  },
  function (error) {
    Promise.reject(error);
  }
);

export { api, baseURL };
