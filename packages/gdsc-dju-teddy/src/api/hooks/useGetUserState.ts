import useSWR from 'swr';

import { FilterType } from '../../types/filterType';
import API from '../index';
async function getUserState(filter: FilterType, userId: string) {
  const res = await API.getUserState(filter, userId);
  return res.data.data;
}

export function useGetUserState(filter: FilterType, userId: string) {
  const { data: userData, error } = useSWR(
    filter && userId && [`${filter}/${userId}`],
    () => getUserState(filter, userId),
    {
      isPaused: () => !(userId && filter),
      suspense: true,
    },
  );
  return {
    userData: userData && userData,
    error: error && error,
  };
}
