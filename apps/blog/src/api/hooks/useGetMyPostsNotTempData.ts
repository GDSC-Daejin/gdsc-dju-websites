import { useQuery } from 'react-query';

import { Position } from '@type/position';
import { createCategoryUrl, createQueryKey } from '@utils/createQueryKey';

import PostService from '../PostService';

async function getMyPostsNotTempData(params: string) {
  const res = await PostService.getMyPostsNotTempData(params);
  return res.data.body.data;
}

export function useGetMyPostsNotTempData(
  category: Position,
  page = 0,
  size: number,
) {
  const obj = {
    page: page,
    size: size,
  };
  const key = createQueryKey('myPost/notTemp', {
    category: category,
    ...obj,
  });

  const { data: userPostNotTempData } = useQuery([key], () =>
    getMyPostsNotTempData(createCategoryUrl(category, obj)),
  );
  return { userPostNotTempData: userPostNotTempData && userPostNotTempData };
}
