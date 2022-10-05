import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetMyData } from '../../apis/hooks/useGetMyData';
import { GoogleSpinnerStatic } from '../../components/Lottie/GoogleSpinner';

const Redirect = () => {
  const navigate = useNavigate();
  const token = Cookies.get('token');

  const { userData } = useGetMyData();

  useEffect(() => {
    (async function () {
      if (!token) return;
      if (!(userData && userData.role)) return;
      if (userData.role === 'LEAD' || userData.role === 'CORE') {
        await navigate('/certified');
      }
    })();
  }, [token, userData]);
  return <GoogleSpinnerStatic />;
};

export default Redirect;
