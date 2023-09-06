import { atom } from 'jotai';

export interface IAlertState {
  alertHandle: boolean;
  alertMessage: string;
  alertStatus: 'WARNING' | 'SUCCESS' | 'ERROR';
}

export const alertAtom = atom<IAlertState>({
  alertHandle: false,
  alertMessage: 'Test Alert',
  alertStatus: 'WARNING' as const,
});
