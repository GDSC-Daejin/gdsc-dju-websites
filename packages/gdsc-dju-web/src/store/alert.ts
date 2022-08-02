import { atom } from 'recoil';
import { IAlertState } from '../types/alert';

export const ALERT = 'alert';

export const AlertState = {
  alertHandle: false,
  alertMessage: '테스트테스트테스트',
  alertStatus: 'warning' as const,
};

export const alertState = atom<IAlertState>({
  key: ALERT,
  default: AlertState,
});
