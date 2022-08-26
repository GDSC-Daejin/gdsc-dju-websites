import { useQuery } from 'react-query';
import PostService from '../PostService';
import { userPostTempUrlFilter } from './postPagination';

export async function getUserPostsNotTempData(userId: string, params: string) {
  const res = await PostService.getUserPostsNotTempData(userId, params);
  return res.data.body.data;
}
export function useGetUserPostsNotTempData(
  userId: string | undefined,
  category: string,
  page = 0,
  size: number,
) {
  const { data: userPostNotTempData } = useQuery(
    [
      `
    ${userId}/temp${userPostTempUrlFilter(category, page, size)}`,
    ],
    () =>
      getUserPostsNotTempData(
        userId!,
        userPostTempUrlFilter(category, page, size),
      ),
    {
      enabled: !!userId,
      suspense: true,
    },
  );
  return { userPostNotTempData: userPostNotTempData && userPostNotTempData };
}
