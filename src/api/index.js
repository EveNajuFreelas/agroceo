/* eslint-disable no-param-reassign */
import axios from 'axios';
import { getObject } from '../utils/storage';

const AccessToken = '@agroceo/accessToken';

const api = axios.create({
  baseURL: 'https://apiv1.agroceo.app',
});

api.interceptors.request.use(async (config) => {
  const token = await getObject(AccessToken);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
