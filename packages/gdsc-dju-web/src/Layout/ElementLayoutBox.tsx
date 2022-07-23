import React, { useEffect, useState } from 'react';
import Alert from '../components/common/Alert';
import { Footer } from '../components/common/Footer';
import Modal from '../components/common/Modal';
import { GoogleSpinner } from '../components/Lottie/GoogleSpinner';

const ElementLayoutBox: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [footer, setFooter] = useState(true);
  useEffect(() => {
    location.pathname == '/' ? setFooter(true) : setFooter(false);
  }, [location.pathname]);
  console.log(location.pathname);
  return (
    <>
      <GoogleSpinner background={true} />
      <Alert />
      <Modal />
      {children}
      <Footer disable={!footer} />
    </>
  );
};

export default ElementLayoutBox;
