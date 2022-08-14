export interface IAlertState {
  alertHandle: boolean;
  alertMessage: string;
  alertStatus: 'warning' | 'success' | 'error';
}
