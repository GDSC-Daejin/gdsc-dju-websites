import { AuthInstance, Instance } from '@src/apis/Instance';
import {
  getRecruitmentInfoDataType,
  recruitmentInfoDataType,
} from '@type/recruitmentInfo';

export const getRecruitStatus = () => {
  return Instance.get<getRecruitmentInfoDataType>(
    `/member-route/api/v1/support/limit`,
  );
};
export const putRecruitStatus = (payload: recruitmentInfoDataType) => {
  return AuthInstance.put<recruitmentInfoDataType>(
    `/member-route/api/admin/v1/support/limit/update`,
    payload,
  );
};
