import { useQuery } from 'react-query';

import { Position } from '@type/position';
import { createCategoryUrl, createQueryKey } from '@utils/createQueryKey';

import PostService from '../PostService';

async function getMyPostListTempData(params: string) {
  const res = await PostService.getMyPostsTempData(params);
  return res.data.body.data;
}
export function useGetMyPostsTempData(category: Position, page = 0, size = 16) {
  const obj = {
    page: page,
    size: size,
  };
  const key = createQueryKey('myPost/temp', {
    category: category,
    ...obj,
  });

  const { data: userPostTempData } = useQuery([key], () =>
    getMyPostListTempData(createCategoryUrl(category, obj)),
  );
  return { userPostTempData: userPostTempData && userPostTempData };
}
