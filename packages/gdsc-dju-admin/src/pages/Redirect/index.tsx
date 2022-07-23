import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import UserService from '../../apis/UserService';
import { userAtom } from '../../atoms/userAtom';
import { GoogleSpinnerStatic } from '../../components/Lottie/GoogleSpinner';

const Redirect = () => {
  const [adminUser, setAdminUser] = useAtom(userAtom);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') ?? null;
  const refresh_token = searchParams.get('refreshToken') ?? null;
  const tokenSuccess =
    localStorage.getItem('token') && localStorage.getItem('refresh_token');

  useEffect(() => {
    (async function () {
      if (token && refresh_token) {
        localStorage.setItem('token', token);
        localStorage.setItem('refresh_token', refresh_token);
        const result = await UserService.getMyData(token);
        const userData = result.data.body.data;
        setAdminUser({
          ...adminUser,
          role: userData.role,
          username: userData.username,
          uid: userData.userId,
          memberInfo: userData.memberInfo,
        });
      }

      if (tokenSuccess && adminUser) {
        navigate('/certified');
      }
    })();
  }, []);
  return <GoogleSpinnerStatic />;
};

export default Redirect;
