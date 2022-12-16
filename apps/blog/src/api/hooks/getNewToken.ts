import { AxiosError, AxiosInstance } from 'axios';
import Cookies from 'js-cookie';

import TokenService from '@src/api/TokenService';

type Callback = (token: string) => void;

let isAlreadyFetchingAccessToken = false;
let subscribers: Callback = () => {};

function addSubscriber(callback: any) {
  subscribers = callback;
}

function onAccessTokenFetched(token: string) {
  subscribers(token);
}

const logout = () => {
  Cookies.remove('token', { path: '/', domain: '.gdsc-dju.com' });
};

export async function resetTokenAndReattemptRequest(
  instance: AxiosInstance,
  error: AxiosError,
) {
  try {
    const { response: errorResponse } = error;
    const retryOriginalRequest = new Promise((resolve, reject) => {
      addSubscriber(async (token: string) => {
        try {
          if (!errorResponse) {
            return;
          }
          errorResponse.config.headers = { Authorization: `Bearer ${token}` };
          resolve(instance(errorResponse.config));
        } catch (error) {
          reject(error);
        }
      });
    });
    if (!isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true;
      const response = await TokenService.getRefresh();

      isAlreadyFetchingAccessToken = false;
      if (response.data.header.code === 403) {
        logout();
      }
      onAccessTokenFetched(response.data.body.data.token);
    }
    return retryOriginalRequest;
  } catch (error) {
    logout();
    return Promise.reject(error);
  }
}
