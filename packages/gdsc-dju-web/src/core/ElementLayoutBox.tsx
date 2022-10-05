import React, { useContext, useEffect, useState } from 'react';

import { Footer, Navigation } from '@gdsc-dju/styled-components';
import { MenuContext } from '@gdsc-dju/styled-components-theme';
import { routes } from '@src/contents/routes';
import { useLocation } from 'react-router';
import MobileMenu from '@organisms/MobileMenu';
import Alert from '@atoms/Alert';
import { GoogleSpinner } from '@common/lotties/GoogleSpinner';
import ReactHelmet from '@common/ReactHelmet';

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
