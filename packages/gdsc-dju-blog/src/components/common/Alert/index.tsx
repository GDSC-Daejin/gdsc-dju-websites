import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  AlertIcon,
  AlertInner,
  AlertInnerWrapper,
  AlertText,
  AlertWrapper,
} from './styled';
import { alertState } from '../../../store/alert';
import SuccessCircle from '../../../assets/SuccessCircle.svg';
import ErrorCircle from '../../../assets/ErrorCircle.svg';
import { AnimatePresence } from 'framer-motion';

const variants = {
  active: {
    opacity: 1,
    scale: 1,
  },
  unActive: {
    opacity: 0,
    scale: 0,
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
    }, 4000);
    return () => clearTimeout(alertTimer);
  }, [alert.alertHandle]);
  const alertStatusColor = {
    success: '#55af7a',
    error: '#f44336',
    warning: '#ffa50e',
  };
  const alertIcon = {
    success: SuccessCircle,
    error: ErrorCircle,
    warning: ErrorCircle,
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
              <AlertIcon src={alertIcon[alert.alertStatus]} alt={'alertIcon'} />
              <AlertText>{alert.alertMessage}</AlertText>
            </AlertInnerWrapper>
          </AlertInner>
        </AlertWrapper>
      )}
    </AnimatePresence>
  );
};

export default Alert;
