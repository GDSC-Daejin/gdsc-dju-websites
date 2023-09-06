import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// import { useAtom } from 'jotai';
import Cookies from 'js-cookie';

import { useGetMyData } from '../apis/hooks/useGetMyData';
// import { userInfoWriteOnlyAtom } from '../store/userAtom';

const CheckAdminUser = () => {
  // const [, writeAdminUser] = useAtom(userInfoWriteOnlyAtom);
  const navigate = useNavigate();
  const location = useLocation();
  const token = Cookies.get('token');
  const { userData } = useGetMyData();
  const isAdmin = userData?.role === 'LEAD' || 'CORE';
  const checkAdminUser = () => {
    if (!token && location.pathname.includes('/certified')) {
      navigate('/');
      if (!isAdmin) {
        navigate('/');
      }
    }
  };
  useEffect(() => {
    (async function () {
      // token && (await writeAdminUser(token));
      token;
      checkAdminUser();
    })();
  }, [userData, token]);
  return null;
};

export default CheckAdminUser;
