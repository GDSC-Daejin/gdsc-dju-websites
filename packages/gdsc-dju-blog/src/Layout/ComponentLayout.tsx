import { AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Alert from '@src/components/atoms/Alert';
import GoogleLoader from '@src/components/atoms/GoogleLoader';
import { loaderState } from '@src/store/loader';
import Navigation from '@src/components/layouts/Navigation';
import Modal from '@src/components/molecules/modal';
import SideBar from '@src/components/organisms/SideBar';
import GlobalStyles from '@styles/globalStyles';
import { NavigationBlock } from '@styles/layouts';
import { getMyToken } from '@src/api/hooks/useGetNewToken';
import Cookies from 'js-cookie';

const ComponentLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loader] = useRecoilState(loaderState);
  const token = Cookies.get('token');
  const refresh_token = Cookies.get('refresh_token');

  useEffect(() => {
    (async () => {
      if (token && refresh_token) {
        const newToken = await getMyToken(refresh_token, token);
        if (!newToken) return;
        Cookies.set('token', newToken);
      }
    })();
  }, [token, refresh_token]);

  return (
    <div>
      <Alert />
      <Modal />
      <SideBar />
      <Navigation />
      <NavigationBlock />
      <AnimatePresence>
        {loader.loading && <GoogleLoader background={loader.background} />}
      </AnimatePresence>
      <GlobalStyles />
      {children}
    </div>
  );
};

export default ComponentLayout;
