import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAtom } from 'jotai';

import { alertAtom } from '@src/store/alertAtom';
import { authAtom } from '@src/store/authAtom';
import { resetUserAtom, setUserAtom } from '@src/store/userAtom';
import { resolveAdminMember, signOutAdmin, subscribeAdminAuth } from '@utils/adminAuth';

const AdminAuthSync = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [, setAlert] = useAtom(alertAtom);
  const [, setUser] = useAtom(setUserAtom);
  const [, resetUser] = useAtom(resetUserAtom);
  const [, setAuthState] = useAtom(authAtom);

  useEffect(() => {
    const unsubscribe = subscribeAdminAuth(async (firebaseUser) => {
      setAuthState({
        isInitializing: true,
        isAuthenticated: false,
      });

      if (!firebaseUser) {
        resetUser();
        setAuthState({
          isInitializing: false,
          isAuthenticated: false,
        });

        if (location.pathname.startsWith('/certified')) {
          navigate('/', { replace: true });
        }

        return;
      }

      try {
        const user = await resolveAdminMember(firebaseUser);

        setUser(user);
        setAuthState({
          isInitializing: false,
          isAuthenticated: true,
        });

        if (location.pathname === '/' || location.pathname === '/redirect') {
          navigate('/certified', { replace: true });
        }
      } catch (error) {
        await signOutAdmin();
        resetUser();
        setAuthState({
          isInitializing: false,
          isAuthenticated: false,
        });
        setAlert({
          alertHandle: true,
          alertStatus: 'ERROR',
          alertMessage:
            error instanceof Error
              ? error.message
              : '로그인에 실패했어요.',
        });

        if (location.pathname !== '/') {
          navigate('/', { replace: true });
        }
      }
    });

    return unsubscribe;
  }, [location.pathname, navigate, resetUser, setAlert, setAuthState, setUser]);

  return null;
};

export default AdminAuthSync;
