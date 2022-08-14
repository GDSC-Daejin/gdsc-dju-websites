import { useQuery } from 'react-query';
import { SearchPostDataType } from '../../types/postData';
import PostService from '../PostService';

async function getSearchPostsData(params: string) {
  const res = await PostService.getSearchPosts(params);
  return res.data.body.data;
}
export function useGetSearchPosts(postContent: string) {
  const { data: postListData } = useQuery<SearchPostDataType>(
    [`post/search/${postContent}`],
    () => getSearchPostsData(postContent),
    {
      cacheTime: 3 * 60 * 1000,
    },
  );
  return { postListData };
}
