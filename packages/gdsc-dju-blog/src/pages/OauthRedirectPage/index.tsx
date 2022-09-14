import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useSearchParams } from 'react-router-dom';
import { getUserData } from '../../api/hooks/useGetMyData';
import TokenService from '../../api/TokenService';
import GoogleLoader from '../../components/atoms/GoogleLoader';

import { IUserDataType } from '../../types/userDataType';

type SelectedUserType = Pick<
  IUserDataType,
  'role' | 'username' | 'userId' | 'memberInfo'
>;
export default function OauthRedirectPage() {
  const [cookies, setCookies] = useCookies(['Authorization', 'refresh_token']);
  const token = cookies.Authorization;

  useEffect(() => {
    (async function () {
      if (token) {
        const userData = await getUserData(token || '');
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
