// 需要配置host: 10.10.24.239 chesscardapi.com

import axios from 'axios';
const instance = axios.create({
	// baseURL: 'http://10.10.24.140/api',
	baseURL: 'http://mockjs.com/api',
	// baseURL: '/api',
	timeout: 15000,
});

instance.interceptors.request.use(config => {
	return config;
}, err => {
	return Promise.resolve(err);
})

instance.interceptors.response.use(response => {
	return response.data;
});

const fetch = {
	axios: instance,
	Axios: axios,
	get(url, params) {
		return instance.get(url, { params });
	},
	post() {
		return instance.post.apply(instance, arguments);
	}
};

export default fetch;
