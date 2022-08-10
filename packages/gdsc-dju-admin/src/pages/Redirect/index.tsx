import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetMyData } from '../../apis/hooks/useGetMyData';
import { GoogleSpinnerStatic } from '../../components/Lottie/GoogleSpinner';
import { userInfoWriteOnlyAtom } from '../../store/userAtom';

const Redirect = () => {
  const [, writeAdminUser] = useAtom(userInfoWriteOnlyAtom);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const refresh_token = searchParams.get('refreshToken');
  const { userData } = useGetMyData();

  useEffect(() => {
    (async function () {
      if (token && refresh_token) {
        localStorage.setItem('token', token);
        localStorage.setItem('refresh_token', refresh_token);
        writeAdminUser().then(() => {
          navigate('/certified');
        });
      }
    })();
  }, [token, refresh_token, userData]);
  return <GoogleSpinnerStatic />;
};

export default Redirect;
