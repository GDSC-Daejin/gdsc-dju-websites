import { AxiosResponse } from 'axios';

import { AuthInstance, Instance } from '@src/apis/Instance';
import { RecruitmentInfoDataType } from '@type/recruitmentInfo';

export const getRecruitStatus = () => {
  return Instance.get<AxiosResponse<RecruitmentInfoDataType>>(
    `/member-route/api/v1/support/limit`,
  );
};
export const putRecruitStatus = (payload: RecruitmentInfoDataType) => {
  return AuthInstance.put<RecruitmentInfoDataType>(
    `/member-route/api/admin/v1/support/limit/update`,
    payload,
  );
};
