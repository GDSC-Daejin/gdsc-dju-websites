import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userAtom } from '../../atoms/userAtom';
import { GoogleSpinnerStatic } from '../../components/Lottie/GoogleSpinner';

const Redirect = () => {
  const [adminUser] = useAtom(userAtom);
  const navigate = useNavigate();
  useEffect(() => {
    if (adminUser) {
      navigate('/certified');
    }
  }, []);
  return <GoogleSpinnerStatic />;
};

export default Redirect;
