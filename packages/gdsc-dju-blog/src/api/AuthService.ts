import { refresh, refreshErrorHandler } from '@src/api/hooks/getNewToken';
import axios from 'axios';

const isProduction = process.env.NODE_ENV === 'production';

const AuthInstance = axios.create({
  timeout: 10000,
  params: {},
  baseURL: `https://api.gdsc-dju.com/${
    isProduction ? '/blog-route' : '/blog-route-dev'
  }`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers':
      'Content-Type, Authorization, Content-Length, X-Requested-With',
  },
});
AuthInstance.interceptors.request.use(refresh, refreshErrorHandler);
AuthInstance.defaults.withCredentials = true;

const Instance = axios.create({
  timeout: 10000,
  params: {},
  baseURL: `https://api.gdsc-dju.com/`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers':
      'Content-Type, Authorization, Content-Length, X-Requested-With',
  },
});
Instance.interceptors.request.use();
Instance.defaults.withCredentials = true;

export { AuthInstance, Instance };
