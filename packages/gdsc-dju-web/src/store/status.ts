import { atom } from 'recoil';
const STATUS = 'status';

export const STATUS_KEY = {
  LOGGEDIN: 'loggedIn',
  INIT: 'init',
};
export const StatusState = {
  [STATUS_KEY.INIT]: false,
  [STATUS_KEY.LOGGEDIN]: false,
};
export const statusState = atom<typeof StatusState>({
  key: STATUS,
  default: StatusState,
});
