import { debounce } from '@utils/debounce';
import React from 'react';
import { throttle } from '../utils/throttle';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleWindowSize = debounce(
    () =>
      setWindowSize(() => {
        return {
          width: window.innerWidth,
          height: window.innerHeight,
        };
      }),
    300,
  );

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowSize);
    return () => window.removeEventListener('resize', handleWindowSize);
  }, []);
  return { windowSize };
};

export default useWindowSize;
