import React, { ReactNode, Ref, useCallback, useEffect, useRef } from 'react';

/**
 * @description that alerts clicks outside of the passed ref
 * ```ts
 * export interface Props {
 *   children: ReactNode;
 *   outsideClick: (target: EventTarget | null) => void;
 *   trigger?: boolean;
 * }
 * ```
 *
 * ```tsx
 * <OutsideClickHandler>
 *     <div>Click outside of me!</div>
 * </OutsideClickHandler>
 * ```
 */

export interface Props {
  children: ReactNode;
  outsideClick: (target: EventTarget | null) => void;
  trigger?: boolean;
}
const OutsideClickHandler = ({
  children,
  outsideClick,
  trigger = true,
}: Props) => {
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
    if (trigger) {
      setTimeout(() => document.addEventListener('click', handleClick), 0);
    }
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick, trigger]);
  return <div ref={ref as Ref<HTMLDivElement>}>{children}</div>;
};

export default OutsideClickHandler;
