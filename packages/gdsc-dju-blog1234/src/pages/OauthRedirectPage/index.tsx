import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useSearchParams } from 'react-router-dom';
import { getUserData } from '../../api/hooks/useGetMyData';
import TokenService from '../../api/TokenService';
import GoogleLoader from '../../components/common/GoogleLoader';
import { IUserDataType } from '../../types/userDataType';

type SelectedUserType = Pick<
  IUserDataType,
  'role' | 'username' | 'userId' | 'memberInfo'
>;
export default function OauthRedirectPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') ?? null;
  const refresh_token = searchParams.get('refreshToken') ?? null;
  const [cookies, setCookies] = useCookies(['token', 'refresh_token']);
  const setCookieData = () => {
    setCookies('token', token, {
      path: '/',
    });
    setCookies('refresh_token', refresh_token, {
      path: '/',
    });
  };

  useEffect(() => {
    (async function () {
      if (token) {
        const userData = await getUserData(token || '');
        TokenService.setToken(token);
        setCookieData();
        sessionStorage.setItem(
          'user',
          JSON.stringify({
            role: userData?.role,
            username: userData?.username,
            userId: userData?.userId,
          }),
        );
        if (userData) {
          if (userData.role.toUpperCase() === 'GUEST'.toUpperCase()) {
            window.location.href = `${location.origin}/signup`;
          } else {
            window.location.href = `${location.origin}`;
          }
        }
      }
    })();
  }, [cookies]);
  return <GoogleLoader />;
}
