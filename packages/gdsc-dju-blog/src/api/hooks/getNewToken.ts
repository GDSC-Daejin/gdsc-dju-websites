import TokenService from '@src/api/TokenService';
import { AxiosError, AxiosInstance } from 'axios';
import Cookies from 'js-cookie';

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

    // subscribers에 access token을 받은 이후 재요청할 함수 추가 (401로 실패했던)
    // retryOriginalRequest는 pending 상태로 있다가
    // access token을 받은 이후 onAccessTokenFetched가 호출될 때
    // access token을 넘겨 다시 axios로 요청하고
    // 결과값을 처음 요청했던 promise의 resolve로 settle시킨다.
    const retryOriginalRequest = new Promise((resolve, reject) => {
      // TODO#1 callback 함수
      addSubscriber(async (token: string) => {
        try {
          if (!errorResponse) return;
          errorResponse.config.headers = { Authorization: `Bearer ${token}` };
          resolve(instance(errorResponse.config));
        } catch (error) {
          reject(error);
        }
      });
    });

    // refresh token을 이용해서 access token 요청
    if (!isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true; // 문닫기 (한 번만 요청)

      const response = await TokenService.getRefresh();

      isAlreadyFetchingAccessToken = false; // 문열기 (초기화)
      if (response.data.header.code == 403) {
        logout();
      }
      // TODO#2 callback 함수 실행 장소
      onAccessTokenFetched(response.data.body.data.token);
    }
    // pending 상테에서 onAccessTokenFetched가 호출될 때 resolve
    return retryOriginalRequest;
  } catch (error) {
    logout();
    return Promise.reject(error);
  }
}
