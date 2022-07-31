import React, { memo, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  AlertInner,
  AlertInnerWrapper,
  AlertText,
  AlertWrapper,
} from './styled';
import { alertState } from '../../../store/alert';
import { AnimatePresence } from 'framer-motion';

const variants = {
  active: {
    opacity: 1,
    scale: 1,
  },
  unActive: {
    opacity: 0,
    scale: 0.5,
  },
};
const Alert = () => {
  const [alert, setAlert] = useRecoilState(alertState);

  useEffect(() => {
    const alertTimer = setTimeout(() => {
      setAlert({
        ...alert,
        alertHandle: false,
      });
      clearTimeout(alertTimer);
    }, 4000);
  }, [alert.alertHandle]);
  const alertStatusColor = {
    success: '#55af7a',
    error: '#f44336',
    warning: '#ffa50e',
  };

  return (
    <AnimatePresence>
      {alert.alertHandle && (
        <AlertWrapper>
          <AlertInner
            variants={variants}
            exit={'unActive'}
            animate={'active'}
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AlertInnerWrapper alertColor={alertStatusColor[alert.alertStatus]}>
              <AlertText>{alert.alertMessage}</AlertText>
            </AlertInnerWrapper>
          </AlertInner>
        </AlertWrapper>
      )}
    </AnimatePresence>
  );
};

export default memo(Alert);
