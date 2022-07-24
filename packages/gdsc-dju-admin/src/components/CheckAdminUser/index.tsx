import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetMyData } from '../../apis/hooks/useGetMyData';
import { userAtom } from '../../atoms/userAtom';

const CheckAdminUser = () => {
  const [adminUser, setAdminUser] = useAtom(userAtom);
  const navigate = useNavigate();
  const location = useLocation();
  const refreshToken = localStorage.getItem('refresh_token');
  const token = localStorage.getItem('token');
  const { userData } = useGetMyData();
  const checkAdminUser = () => {
    if (refreshToken && token && userData) {
      setAdminUser({
        ...adminUser,
        role: userData.role,
        nickname: userData.memberInfo.nickname,
        uid: userData.userId,
        memberInfo: userData.memberInfo,
      });
    }
    if (!refreshToken && !token && location.pathname.includes('/certified')) {
      navigate('/');
    }
  };
  useEffect(() => {
    checkAdminUser();
  }, [userData]);
  return null;
};

export default CheckAdminUser;
