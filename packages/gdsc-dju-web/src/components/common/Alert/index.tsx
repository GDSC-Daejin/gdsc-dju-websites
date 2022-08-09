import { AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';
import React, { memo, useEffect } from 'react';
import { alertAtom } from '../../../store/alertAtom';
import {
  AlertInner,
  AlertInnerWrapper,
  AlertText,
  AlertWrapper,
} from './styled';

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
  const [alert, setAlert] = useAtom(alertAtom);

  useEffect(() => {
    if (alert.alertHandle) {
      const alertTimer = setTimeout(() => {
        setAlert({
          ...alert,
          alertHandle: false,
        });
        clearTimeout(alertTimer);
      }, 4000);
    }
  }, [alert]);

  const ALERT_STATUS_COLOR = {
    SUCCESS: '#55af7a',
    ERROR: '#f44336',
    WARNING: '#ffa50e',
  };

  return (
    <AnimatePresence>
      {alert && alert.alertHandle && (
        <AlertWrapper>
          <AlertInner
            variants={variants}
            exit={'unActive'}
            animate={'active'}
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AlertInnerWrapper
              alertColor={ALERT_STATUS_COLOR[alert.alertStatus]}
            >
              <AlertText>{alert.alertMessage}</AlertText>
            </AlertInnerWrapper>
          </AlertInner>
        </AlertWrapper>
      )}
    </AnimatePresence>
  );
};

export default memo(Alert);
