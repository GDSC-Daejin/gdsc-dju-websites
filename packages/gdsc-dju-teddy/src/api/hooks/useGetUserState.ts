import useSWR from 'swr';
import { FilterType } from '../../types/filterType';
import API from '../index';
async function getUserState(filter: FilterType, userId: string) {
  const res = await API.getUserState(filter, userId);
  return res.data.data;
}

export function useGetUserState(userId: string) {
  const { data: userData, error } = useSWR(
    [userId, `/api/v1/users/${userId}/state`],
    getUserState,
    {
      suspense: true,
    },
  );
  return {
    userData: userData && userData,
    error: error && error,
  };
}
