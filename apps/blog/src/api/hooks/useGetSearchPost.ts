import { useQuery } from 'react-query';

import { Position } from '@type/position';
import { PostListResponse } from '@type/postData';
import { createQueryKey, createSearchUrl } from '@utils/createQueryKey';

import PostService from '../PostService';

async function getSearchPostsData(params: string) {
  const res = await PostService.getSearchPosts(params);
  return res.data.body.data;
}
export function useGetSearchPosts(
  searchContent: string,
  category: Position,
  page = 0,
) {
  const { data: postListData } = useQuery<PostListResponse>(
    [
      createQueryKey('post/search', {
        searchContent: searchContent,
        category: category,
        page: page,
      }),
    ],
    () =>
      getSearchPostsData(
        createSearchUrl(searchContent, category, {
          page: page,
        }),
      ),
    {
      enabled: Boolean(searchContent) && Boolean(category),
      cacheTime: 60 * 1000,
    },
  );
  return { postListData };
}
