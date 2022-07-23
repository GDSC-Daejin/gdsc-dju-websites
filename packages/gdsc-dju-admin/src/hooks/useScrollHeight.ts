import { useEffect } from 'react';
import { debounce } from '../utils/debounce';

export const useScrollHeight = (
  eventListener: (this: typeof window, event: Event) => void,
) => {
  useEffect(() => {
    window.addEventListener('scroll', debounce(eventListener, 15));
    return () => {
      window.removeEventListener('scroll', eventListener);
    };
  });
};
