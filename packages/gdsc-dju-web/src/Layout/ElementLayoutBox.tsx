import Navigation from '@layout/Navigation';
import React, { useEffect, useState } from 'react';

import Alert from '@common/Alert';
import { Footer } from '@layout/Footer';
import { GoogleSpinner } from '@src/components/Lottie/GoogleSpinner';
import { useLocation } from 'react-router';
import ReactHelmet from '@src/components/ReactHelmet';

const ElementLayoutBox: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [footer, setFooter] = useState(true);
  const location = useLocation();
  useEffect(() => {
    location.pathname == '/' ? setFooter(true) : setFooter(false);
  }, [location.pathname]);
  const isOnboard = location.pathname.includes('onboard');
  return (
    <>
      <ReactHelmet />

      <GoogleSpinner background={true} />
      {!isOnboard && <Navigation />}
      <Alert />
      {children}
      <Footer disable={!footer && !isOnboard} />
    </>
  );
};

export default ElementLayoutBox;
