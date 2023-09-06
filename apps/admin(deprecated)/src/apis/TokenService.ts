import { AuthInstance } from '@src/apis/Instance';

export const getRedirectURL = () => {
  const OAUTH2_REDIRECT_URI = `${location.origin}/redirect`;
  return `https://accounts.gdscdju.dev/oauth2/authorization/google?redirect_uri=${OAUTH2_REDIRECT_URI}`;
};

export const getRefresh = () => {
  return AuthInstance.get(`/refresh`);
};
