import axios, { CancelToken } from 'axios';
import { CANCEL } from 'redux-saga';
import httpAdapter from 'axios/lib/adapters/http';

localStorage.setItem('petJWT', 'testPetJWT');

axios.defaults.adapter = httpAdapter;
axios.defaults.headers.common['X-Auth-Token'] = localStorage.getItem(
  'petJWT'
);

const X_AUTH_TOKEN = 'X-Auth-Token';

const instance = axios.create({
  baseURL: 'http://localhost:8000/'
});

export const get = (url, params = {}) => {
  const source = CancelToken.source();
  const req = instance.get(url, {
    cancelToken: source.token,
    params
  });
  req[CANCEL] = () => source.cancel();

  return req;
};

export const post = (url, payload) => {
  const source = CancelToken.source();
  const req = instance.post(url, payload, {
    cancelToken: source.token
  });
  req[CANCEL] = () => source.cancel();

  return req;
};

export const put = (url, payload) => {
  return instance.put(url, payload);
};

export const remove = (url, payload) => {
  return instance.delete(url, payload);
};