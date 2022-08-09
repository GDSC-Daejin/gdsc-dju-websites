import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { GoogleSpinner } from '../components/atoms/Lottie/GoogleSpinner';
import Alert from '../components/organisms/Alert';
import { Footer } from '../components/organisms/Footer';
import ReactHelmet from '../components/ReactHelmet';

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
      <ReactHelmet />
      <GoogleSpinner background={true} />
      <Alert />
      {children}
      <Footer disable={!footer} />
    </>
  );
};

export default ElementLayoutBox;
