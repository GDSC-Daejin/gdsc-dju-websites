import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Alert from '../components/common/Alert';
import { Footer } from '../components/common/Footer';

import { GoogleSpinner } from '../components/Lottie/GoogleSpinner';

const ElementLayoutBox: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [footer, setFooter] = useState(true);
  const location = useLocation();
  useEffect(() => {
    location.pathname == '/' ? setFooter(true) : setFooter(false);
  }, [location.pathname]);
  return (
    <>
      <GoogleSpinner background={true} />
      <Alert />
      {children}
      <Footer disable={!footer} />
    </>
  );
};

export default ElementLayoutBox;
