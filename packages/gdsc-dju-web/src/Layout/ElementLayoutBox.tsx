import Alert from '@common/Alert';
import { Footer, Navigation } from '@gdsc-dju/styled-components';
import { MenuContext } from '@gdsc-dju/styled-components-theme';
import MobileMenu from '@layout/MobileMenu';
import { GoogleSpinner } from '@src/components/Lottie/GoogleSpinner';
import ReactHelmet from '@src/components/ReactHelmet';
import { routes } from '@src/contents/routes';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const ElementLayoutBox: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [footer, setFooter] = useState(true);
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);
  const location = useLocation();
  useEffect(() => {
    location.pathname == '/' ? setFooter(true) : setFooter(false);
  }, [location.pathname]);
  return (
    <>
      <ReactHelmet />
      <GoogleSpinner background={true} />
      <Alert />
      <Navigation
        sideMenu={<MobileMenu />}
        isMenuOpen={isMenuOpen}
        pointColor={'blue900'}
        menuToggle={toggleMenu}
        menuPosition={'left-mobile-only'}
        routes={routes}
      />
      {children}
      {!footer && <Footer />}
    </>
  );
};

export default ElementLayoutBox;
