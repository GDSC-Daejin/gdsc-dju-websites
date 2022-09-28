import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
{
  /*페이지 이동시 스크롤 초기화 코드*/
}
const ScrollTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollTop;
