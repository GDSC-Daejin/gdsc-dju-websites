import { AuthInstance } from '@src/apis/Instance';
import { Role } from '@type/role';
import { AxiosResponse, IUserDataType } from '@type/userDataType';

export const getMyData = () => {
  return AuthInstance.get<AxiosResponse<IUserDataType>>(
    `/member-route/api/guest/v1/me`,
  );
};

export const getMemberListData = () => {
  return AuthInstance.get<AxiosResponse<IUserDataType[]>>(
    `/member-route/api/admin/v1/member/list`,
  );
};

export const putMemberData = (payload: { userId: string; role: Role }) => {
  return AuthInstance.put<IUserDataType>(
    `/member-route/api/admin/v1/update/role`,
    payload,
  );
};
