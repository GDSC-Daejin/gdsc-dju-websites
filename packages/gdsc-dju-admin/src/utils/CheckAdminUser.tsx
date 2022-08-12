import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetMyData } from '../apis/hooks/useGetMyData';
import { userInfoWriteOnlyAtom } from '../store/userAtom';

const CheckAdminUser = () => {
  const [, writeAdminUser] = useAtom(userInfoWriteOnlyAtom);
  const navigate = useNavigate();
  const location = useLocation();
  const refreshToken = localStorage.getItem('refresh_token');
  const token = localStorage.getItem('token');
  const { userData } = useGetMyData();
  const isAdmin = userData?.role === 'LEAD' || 'CORE';
  const checkAdminUser = () => {
    if (!refreshToken && !token && location.pathname.includes('/certified')) {
      navigate('/');
      if (!isAdmin) {
        navigate('/');
      }
    }
  };
  useEffect(() => {
    (async function () {
      token && (await writeAdminUser(token));
      checkAdminUser();
    })();
  }, [userData, token]);
  return null;
};

export default CheckAdminUser;
