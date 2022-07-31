import { useLocation } from 'react-router';

const location = useLocation();
export const hideNavigation = (setNavHandler: (data: boolean) => void) => {
  if (location.pathname.includes('/')) {
    setNavHandler(true);
  }
  if (location.pathname.includes('/onboarding')) {
    setNavHandler(false);
  }
  if (location.pathname.includes('/admin')) {
    setNavHandler(false);
  }
};
