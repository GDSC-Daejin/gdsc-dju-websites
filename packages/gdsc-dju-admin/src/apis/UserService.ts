import { AuthInstance } from '@src/apis/Instance';

import { RowMemberDataType } from '../types/userDataType';

export const getMyData = () => {
  return AuthInstance.get<RowMemberDataType>(`/member-route/api/guest/v1/me`);
};
