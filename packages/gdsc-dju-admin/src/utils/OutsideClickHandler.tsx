import React, { useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export interface Props {
  children: React.ReactNode;
  outsideClick: (target: EventTarget | null) => void;
  trigger?: boolean;
}

const OutsideClickHandler: React.FC<Props> = ({
  children,
  outsideClick,
  trigger = true,
}) => {
  const ref = useRef<HTMLElement>(null);

  const handleClick = useCallback(
    (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        outsideClick(e.target);
      }
    },
    [outsideClick],
  );

  useEffect(() => {
    // Allow logic to operate after a render
    if (trigger) {
      setTimeout(() => document.addEventListener('click', handleClick), 0);
    }

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick, trigger]);

  return (
    <motion.div ref={ref as React.Ref<HTMLDivElement>}>{children}</motion.div>
  );
};

export default OutsideClickHandler;
