import { useQuery } from 'react-query';

import { Position } from '@type/position';
import { createCategoryUrl, createQueryKey } from '@utils/createQueryKey';

import PostService from '../PostService';

export async function getUserPostsNotTempData(userId: string, params: string) {
  const res = await PostService.getUserPostsNotTempData(userId, params);
  return res.data.body.data;
}
export function useGetUserPostsNotTempData(
  userId: string | undefined,
  category: string | undefined,
  page = 0,
  size: number,
) {
  const isAble = userId && category;

  const { data: userPostNotTempData } = useQuery(
    [
      createQueryKey(`${userId}/notTemp`, {
        category: category,
        page: page,
        size: size,
      }),
    ],
    () =>
      getUserPostsNotTempData(
        userId!,
        createCategoryUrl(category as Position, { page: page, size: size }),
      ),
    {
      enabled: Boolean(isAble),
      suspense: true,
    },
  );
  return { userPostNotTempData: userPostNotTempData && userPostNotTempData };
}
