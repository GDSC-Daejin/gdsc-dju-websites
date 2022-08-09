import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetMyData } from '../../apis/hooks/useGetMyData';
import { userAtom } from '../../store/userAtom';
import { GoogleSpinnerStatic } from '../../components/Lottie/GoogleSpinner';

const Redirect = () => {
  const [adminUser, setAdminUser] = useAtom(userAtom);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') ?? null;
  const refresh_token = searchParams.get('refreshToken') ?? null;
  const { userData } = useGetMyData();
  useEffect(() => {
    (async function () {
      if (token && refresh_token) {
        localStorage.setItem('token', token);
        localStorage.setItem('refresh_token', refresh_token);
        if (userData) {
          setAdminUser({
            ...adminUser,
            role: userData.role,
            nickname: userData.memberInfo.nickname,
            uid: userData.userId,
            memberInfo: userData.memberInfo,
          });
          navigate('/certified');
        }
      }
    })();
  }, [token, refresh_token, userData]);
  return <GoogleSpinnerStatic />;
};

export default Redirect;
