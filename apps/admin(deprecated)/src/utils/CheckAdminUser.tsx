import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAtom } from 'jotai';

import { GoogleSpinnerStatic } from '../components/Lottie/GoogleSpinner';
import { authAtom } from '../store/authAtom';

const CheckAdminUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [authState] = useAtom(authAtom);

  useEffect(() => {
    if (authState.isInitializing) {
      return;
    }

    if (!authState.isAuthenticated && location.pathname.startsWith('/certified')) {
      navigate('/', { replace: true });
    }
    if (
      authState.isAuthenticated &&
      (location.pathname === '/' || location.pathname === '/redirect')
    ) {
      navigate('/certified', { replace: true });
    }
  }, [authState.isAuthenticated, authState.isInitializing, location.pathname, navigate]);

  if (authState.isInitializing) {
    return <GoogleSpinnerStatic />;
  }

  return null;
};

export default CheckAdminUser;
