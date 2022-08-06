import { MouseEvent, useEffect, useRef, useState, useTransition } from 'react';

export const useYClickScroll = () => {
  const [sectionWidth, setSectionWidth] = useState(0);
  const [scrollPosition, setScrollPosition] = useState({
    top: 0,
    left: 0,
    x: 0,
    y: 0,
  });
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isPending, startTransition] = useTransition();
  const sectionRef = useRef<HTMLDivElement>(null);
  const sessionRef = useRef<HTMLDivElement>(null);

  const mouseDownHandler = function (e: MouseEvent<HTMLDivElement>) {
    if (sessionRef.current) {
      sessionRef.current.style.cursor = 'grabbing';
      sessionRef.current.style.userSelect = 'none';
      setScrollPosition({
        // The current scroll
        left: sessionRef.current.scrollLeft,
        top: sessionRef.current.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      });
    }
  };
  const mouseMoveHandler = function (e: MouseEvent<HTMLDivElement>) {
    // How far the mouse has been moved
    const dx = e.clientX - scrollPosition.x;
    const dy = e.clientY - scrollPosition.y;
    if (sessionRef.current && sessionRef.current.style.cursor == 'grabbing') {
      sessionRef.current.scrollTop = scrollPosition.top - dy;
      sessionRef.current.scrollLeft = scrollPosition.left - dx;
    }
  };
  const mouseUpHandler = function () {
    if (sessionRef.current) {
      sessionRef.current.style.cursor = 'grab';
      sessionRef.current.style.removeProperty('user-select');
    }
  };

  const windowSizeHandler = () => {
    startTransition(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  };

  useEffect(() => {
    window.addEventListener('resize', windowSizeHandler);
    return () => {
      window.removeEventListener('resize', windowSizeHandler);
    };
  }, []);

  useEffect(() => {
    sectionRef.current && setSectionWidth(sectionRef.current?.offsetWidth);
  }, [sectionRef]);

  return {
    windowSize,
    sectionWidth,
    sectionRef,
    sessionRef,
    mouseDownHandler,
    mouseMoveHandler,
    mouseUpHandler,
  };
};
