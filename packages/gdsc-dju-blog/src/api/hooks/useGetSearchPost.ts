import { postSearchUrlFilter } from '@src/api/hooks/postPagination';
import { PostListResponse } from '@type/postData';
import { useQuery } from 'react-query';

import PostService from '../PostService';

export interface Props {
  searchContent: string;
  category: string;
  page: number;
}
async function getSearchPostsData(params: string) {
  const res = await PostService.getSearchPosts(params);
  return res.data.body.data;
}
export function useGetSearchPosts(props: Props) {
  const { searchContent, category, page } = props;
  const { data: postListData } = useQuery<PostListResponse>(
    [`search/${postSearchUrlFilter(searchContent, category, page)}`],
    () =>
      getSearchPostsData(postSearchUrlFilter(searchContent, category, page)),
    {
      enabled: !!searchContent && !!category,
      cacheTime: 60 * 1000,
    },
  );
  return { postListData };
}
