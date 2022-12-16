import { useQuery } from 'react-query';

import { Position } from '@type/position';
import { createCategoryUrl, createQueryKey } from '@utils/createQueryKey';

import PostService from '../PostService';

async function getPostsData(params: string) {
  const res = await PostService.getPostsData(params);
  return res.data.body.data;
}
export function useGetPostsData(category: Position, page = 0, size = 16) {
  const obj = {
    page: page,
    size: size,
  };

  const key = createQueryKey('post/list', {
    category: category,
    ...obj,
  });

  const { data: postListData } = useQuery([key], () =>
    getPostsData(createCategoryUrl(category, obj)),
  );
  return {
    postListData: postListData && postListData,
  };
}
