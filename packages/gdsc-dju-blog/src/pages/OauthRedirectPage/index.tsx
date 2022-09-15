import { getMyData } from '@src/api/hooks/useGetMyData';
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import GoogleLoader from '../../components/atoms/GoogleLoader';

export default function OauthRedirectPage() {
  const [cookies, setCookies] = useCookies(['token', 'refresh_token']);
  const token = cookies.token;
  // const { myData } = useGetMyData();

  useEffect(() => {
    (async function () {
      if (token) {
        const myData = await getMyData();
        console.log(myData);
        sessionStorage.setItem(
          'user',
          JSON.stringify({
            role: myData?.role,
            username: myData?.username,
            userId: myData?.userId,
          }),
        );
        if (myData) {
          if (myData.role.toUpperCase() === 'GUEST'.toUpperCase()) {
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
