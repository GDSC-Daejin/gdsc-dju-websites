import { atom } from 'recoil';

export const AdminUser = 'adminUser';
export const AdminUserState = {
  uid: '',
  name: '',
  nickname: '',
  phoneNumber: '',
};
export const adminUserState = atom<typeof AdminUserState>({
  key: AdminUser,
  default: AdminUserState,
});
