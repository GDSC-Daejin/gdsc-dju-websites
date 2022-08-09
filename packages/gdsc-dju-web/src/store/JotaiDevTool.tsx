import { useAtomsDevtools } from 'jotai/devtools';
import React, { ReactElement } from 'react';

//gJotai에서 redux devtools를 사용할 수 있게 해줍니다.
const isProduction = process.env.NODE_ENV !== 'production';
export const AtomDevtools: React.FC<{
  children: ReactElement;
}> = ({ children }) => {
  useAtomsDevtools('atomDevtools', { enabled: !isProduction });

  return children;
};
