import { useQuery } from 'react-query';

import { Position } from '@type/position';
import { createCategoryUrl, createQueryKey } from '@utils/createQueryKey';

import PostService from '../PostService';

async function getMyPostsData(params: string) {
  const res = await PostService.getMyPostsData(params);
  return res.data.body.data;
}

export function useGetMyPostsData(category: Position, page = 0, size: number) {
  const obj = {
    page: page,
    size: size,
  };
  const key = createQueryKey('myPost', {
    category: category,
    ...obj,
  });

  const { data: userPostData } = useQuery([key], () =>
    getMyPostsData(createCategoryUrl(category, obj)),
  );
  return { userPostData: userPostData && userPostData };
}
