import { atom } from 'jotai';

export interface IAlertState {
  alertHandle: boolean;
  alertMessage: string;
  alertStatus: 'warning' | 'success' | 'error';
}

export const alertAtom = atom({
  alertHandle: false,
  alertMessage: '테스트테스트테스트',
  alertStatus: 'warning' as const,
});
