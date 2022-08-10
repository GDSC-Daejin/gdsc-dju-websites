import { atom } from 'jotai';

export interface IAlertState {
  alertHandle: boolean;
  alertMessage: string;
  alertStatus: 'WARNING' | 'SUCCESS' | 'ERROR';
}
const defaultAlertState: IAlertState = {
  alertHandle: true,
  alertMessage: 'Test Alert',
  alertStatus: 'SUCCESS',
};

export const alertAtom = atom<IAlertState>(defaultAlertState);
