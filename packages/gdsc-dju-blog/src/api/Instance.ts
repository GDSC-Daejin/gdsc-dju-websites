import { refresh, refreshErrorHandler } from '@src/api/hooks/getNewToken';
import axios from 'axios';

const isProduction = process.env.NODE_ENV === 'production';

const AuthInstance = axios.create({
  timeout: 10000,
  params: {},
  baseURL: `https://api.gdsc-dju.com/`,
});
AuthInstance.interceptors.request.use(refresh, refreshErrorHandler);
AuthInstance.defaults.withCredentials = true;

const AuthBlogInstance = axios.create({
  timeout: 10000,
  params: {},
  baseURL: `https://api.gdsc-dju.com/${
    isProduction ? 'blog-route' : 'blog-route-dev'
  }`,
});
AuthBlogInstance.interceptors.request.use(refresh, refreshErrorHandler);
AuthInstance.defaults.withCredentials = true;

const Instance = axios.create({
  timeout: 10000,
  params: {},
  baseURL: `https://api.gdsc-dju.com`,
});
const BlogInstance = axios.create({
  timeout: 10000,
  params: {},
  baseURL: `https://api.gdsc-dju.com/${
    isProduction ? 'blog-route' : 'blog-route-dev'
  }`,
});
Instance.interceptors.request.use();
Instance.defaults.withCredentials = true;

export { Instance, AuthInstance, BlogInstance, AuthBlogInstance };
