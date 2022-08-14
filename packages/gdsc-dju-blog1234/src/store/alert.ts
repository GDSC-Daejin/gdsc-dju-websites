import { atom } from 'recoil';
import { IAlertState } from '../types/alert';

export const ALERT = 'alert';

export const AlertState = {
  alertHandle: false,
  alertMessage: '기본값 세팅입니다.',
  alertStatus: 'warning' as const,
};

export const alertState = atom<IAlertState>({
  key: ALERT,
  default: AlertState,
});
