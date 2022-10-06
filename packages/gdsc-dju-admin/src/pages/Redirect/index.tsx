import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Cookies from 'js-cookie';

import { useGetMyData } from '../../apis/hooks/useGetMyData';
import { GoogleSpinnerStatic } from '../../components/Lottie/GoogleSpinner';

const Redirect = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = Cookies.get('token');

  const { userData } = useGetMyData();

  useEffect(() => {
    (async function () {
      if (token) {
        await navigate('/certified');
      }
    })();
  }, [token, userData]);
  return <GoogleSpinnerStatic />;
};

export default Redirect;
