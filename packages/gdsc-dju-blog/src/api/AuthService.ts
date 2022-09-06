import { refresh, refreshErrorHandler } from '@src/api/hooks/getNewToken';
import axios from 'axios';

const Auth = axios.create({
  timeout: 10000,
  params: {},
});
Auth.interceptors.request.use(refresh, refreshErrorHandler);
export default Auth;
