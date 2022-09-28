import { PostListResponse } from '@type/postData';
import { useQuery } from 'react-query';

import PostService from '../PostService';

export interface Props {
  searchContent: string;
  category: string;
  page: number;
}
async function getSearchPostsData(params: Props) {
  const res = await PostService.getSearchPosts(params);
  return res.data.body.data;
}
export function useGetSearchPosts(props: Props) {
  const { searchContent, category, page } = props;
  const { data: postListData } = useQuery<PostListResponse>(
    [`post/search/${searchContent}/${category}/${page}`],
    () => getSearchPostsData(props),
    {
      enabled: !!searchContent && !!category && !!page,
      cacheTime: 60 * 1000,
    },
  );
  return { postListData };
}
