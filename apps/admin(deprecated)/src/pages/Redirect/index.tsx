import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAtom } from 'jotai';
import Cookies from 'js-cookie';

import { alertAtom } from '@src/store/alertAtom';

import { useGetMyData } from '../../apis/hooks/useGetMyData';
import { GoogleSpinnerStatic } from '../../components/Lottie/GoogleSpinner';

const Redirect = () => {
  const navigate = useNavigate();
  const token = Cookies.get('token');
  const [alert, setAlert] = useAtom(alertAtom);
  const { userData } = useGetMyData();

  useEffect(() => {
    if (!token) return;
    if (!(userData && userData.role)) return;
    if (userData.role === 'LEAD' || userData.role === 'CORE') {
      navigate('/certified');
    } else {
      navigate('/');
      setAlert({
        alertHandle: true,
        alertMessage: '인증되지 않은 사용자입니다.',
        alertStatus: 'ERROR',
      });
    }
  }, [token, userData]);
  return <GoogleSpinnerStatic />;
};

export default Redirect;
