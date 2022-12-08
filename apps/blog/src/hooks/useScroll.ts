import React from 'react';

export const useScroll = (ref: React.RefObject<HTMLDivElement>) => {
  const [state, setState] = React.useState(ref.current?.scrollLeft ?? 0);

  const onScroll = (event: any) => {
    setState(event.target.scrollLeft);
  };

  React.useEffect(() => {
    ref.current?.addEventListener('scroll', onScroll);
    return ref.current?.removeEventListener('scroll', onScroll);
  }, []);

  return state;
};
