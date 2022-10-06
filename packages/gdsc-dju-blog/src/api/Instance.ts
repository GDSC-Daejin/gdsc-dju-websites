import axios from 'axios';
import Cookies from 'js-cookie';

import { resetTokenAndReattemptRequest } from '@src/api/hooks/getNewToken';

const isProduction = process.env.NODE_ENV === 'production';

let token = Cookies.get('token');
const blogRoute = `https://api.gdsc-dju.com/${
  isProduction ? 'blog-route' : 'blog-route-dev'
}`;

const generateAuthInstance = (baseUrl: string) => {
  const instance = axios.create({
    timeout: 10000,
    params: {},
    headers: { Authorization: `Bearer ${token}` },
    baseURL: baseUrl,
  });
  instance.defaults.withCredentials = true;
  instance.interceptors.response.use(
    (response) => response,
    (error) => resetTokenAndReattemptRequest(instance, error),
  );
  return instance;
};

const generateInstance = (baseUrl: string) => {
  const instance = axios.create({
    timeout: 10000,
    params: {},
    baseURL: baseUrl,
  });
  instance.defaults.withCredentials = true;
  return instance;
};

const AuthInstance = generateAuthInstance('https://accounts.gdsc-dju.com/');
const AuthBlogInstance = generateAuthInstance(blogRoute);
const Instance = generateInstance(`https://api.gdsc-dju.com`);
const BlogInstance = generateInstance(blogRoute);

export { Instance, AuthInstance, BlogInstance, AuthBlogInstance };
