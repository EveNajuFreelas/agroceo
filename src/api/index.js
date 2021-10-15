/* eslint-disable no-param-reassign */
import axios from 'axios';
import { getObject } from '../utils/storage';

const AccessToken = '@agroceo/accessToken';

const principal = 'https://apiv1.agroceo.app';
const localhost = 'http://localhost:3334';

const api = axios.create({
	baseURL: localhost,
});

api.interceptors.request.use(async config => {
	const token = await getObject(AccessToken);
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export default api;
