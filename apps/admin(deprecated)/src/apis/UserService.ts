import { AuthInstance } from '@src/apis/Instance';
import { Instance } from '@src/apis/Instance';
import { Role } from '@type/role';
import { AxiosResponse, IUserDataType } from '@type/userDataType';

export const getMyData = () => {
  return AuthInstance.get<AxiosResponse<IUserDataType>>(
    `/member-route/api/guest/v1/me`,
  );
};

export const getMemberListData = () => {
  return Instance.get(`/member-route/api/v1/members`);
};

export const putMemberData = (payload: { userId: string; role: Role }) => {
  return AuthInstance.put<IUserDataType>(
    `/member-route/api/admin/v1/update/role`,
    payload,
  );
};

export const unwrapMemberListResponse = (
  response: unknown,
): IUserDataType[] => {
  const payload = (response as { data?: unknown })?.data ?? response;

  if (Array.isArray(payload)) {
    return payload as IUserDataType[];
  }
  if (
    payload &&
    typeof payload === 'object' &&
    Array.isArray((payload as { data?: unknown }).data)
  ) {
    return (payload as { data: IUserDataType[] }).data;
  }
  if (
    payload &&
    typeof payload === 'object' &&
    Array.isArray(
      (payload as { body?: { data?: unknown } }).body?.data,
    )
  ) {
    return (payload as { body: { data: IUserDataType[] } }).body.data;
  }

  return [];
};
