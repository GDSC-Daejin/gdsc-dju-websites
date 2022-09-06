import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useSearchParams } from 'react-router-dom';
import TokenService from '../../api/TokenService';
import GoogleLoader from '../../components/atoms/GoogleLoader';
import { getMyData } from '@src/api/hooks/useGetMyData';

export default function OauthRedirectPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') ?? null;
  const refresh_token = searchParams.get('refreshToken') ?? null;
  const [cookies, setCookies] = useCookies(['token', 'refresh_token']);
  const expires = new Date(new Date().getTime() + 30 * 60 * 1000);

  const setCookieData = () => {
    setCookies('token', token, {
      expires: expires,
    });
    setCookies('refresh_token', refresh_token, {
      expires: expires,
    });
  };

  useEffect(() => {
    setCookieData();
    (async function () {
      if (token) {
        const userData = await getMyData();
        TokenService.setToken(token);
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
