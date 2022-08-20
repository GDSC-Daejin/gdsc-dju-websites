import { useQuery } from 'react-query';
import { SearchPostDataType } from '../../types/postData';
import PostService from '../PostService';

export interface UseGetSearchPosts {
  SearchContent: string;
  category: string;
  page: number;
}
async function getSearchPostsData(params: UseGetSearchPosts) {
  const res = await PostService.getSearchPosts(params);
  return res.data.body.data;
}
export function useGetSearchPosts(props: UseGetSearchPosts) {
  const { SearchContent, category, page } = props;
  const { data: postListData } = useQuery<SearchPostDataType>(
    [`post/search/${SearchContent}/${category}/${page}`],
    () => getSearchPostsData(props),
    {
      cacheTime: 3 * 60 * 1000,
    },
  );
  return { postListData };
}
