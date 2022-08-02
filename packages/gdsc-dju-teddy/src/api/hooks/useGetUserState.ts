import useSWR from 'swr';
import API from '../index';
async function getUserState(userId: string) {
  const res = await API.getUserState(userId);
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
