import React, { useCallback, useEffect } from 'react';

type OutsideClickProps = {
  children: React.ReactNode;
  onClickOutside: () => void;
};

const OutsideClick = ({ children, onClickOutside }: OutsideClickProps) => {
  const ref = React.useRef<HTMLElement>(null);

  const handleClick = useCallback(
    (e: Event) => {
      if (!ref.current) return;
      const target = e.target as HTMLElement;
      const targetPosition = target.getBoundingClientRect();
      const refPosition = ref.current.getBoundingClientRect();

      const checkBottom = targetPosition.bottom < refPosition.bottom;
      const checkTop = targetPosition.top > refPosition.top;
      const checkLeft = targetPosition.left > refPosition.left;
      const checkRight = targetPosition.right < refPosition.right;
      //생성된 element는 contain으로 감지하지 못하기 때문에 클릭한 영역과 내부 element 위치를 비교합니다.
      if (checkBottom || checkTop || checkLeft || checkRight) return;
      onClickOutside();
    },
    [onClickOutside],
  );
  useEffect(() => {
    setTimeout(() => document.addEventListener('click', handleClick), 0);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  return <div ref={ref as React.Ref<HTMLDivElement>}>{children}</div>;
};

export default OutsideClick;
