import { useQuery } from 'react-query';
import PostService from '../PostService';
import { postUrlFilter } from './postPagination';

async function getPostsData(params: string) {
  const res = await PostService.getPostsData(params);
  return res.data.body.data;
}
export function useGetPostsData(category: string, page = 0, size?: number) {
  const { data: postListData } = useQuery(
    [`post/list${postUrlFilter(category, page, size)}`],
    () => getPostsData(postUrlFilter(category, page, size)),
  );
  return {
    postListData: postListData && postListData,
  };
}
