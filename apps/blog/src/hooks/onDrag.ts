import React, { useState } from 'react';

const onDrag = (scrollRef: React.RefObject<HTMLDivElement>) => {
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const onDragStart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDrag(true);
    if (scrollRef.current?.scrollLeft !== undefined)
      setStartX(e.pageX + scrollRef.current.scrollLeft);
  };
  const onDragMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isDrag) {
      if (scrollRef.current !== null) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
        if (scrollRef.current?.scrollLeft !== undefined) {
          scrollRef.current.scrollLeft = startX - e.pageX;
        }
        if (scrollLeft === 0) {
          setStartX(e.pageX);
        } else if (scrollWidth <= clientWidth + scrollLeft) {
          setStartX(e.pageX + scrollLeft);
        }
      }
    }
  };
  const onDragEnd = () => {
    setIsDrag(false);
  };

  return {
    isDrag,
    onDragStart,
    onDragEnd,
    onDragMove,
  };
};

export default onDrag;
