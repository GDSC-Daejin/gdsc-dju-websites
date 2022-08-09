import { useAtomsDevtools } from 'jotai/devtools';
import React, { ReactElement } from 'react';

//Jotai에서 redux devtools를 사용할 수 있게 해줍니다.
export const AtomDevtools: React.FC<{
  children: ReactElement;
}> = ({ children }) => {
  useAtomsDevtools('atomDevtools', { enabled: true });
  return children;
};
