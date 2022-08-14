import { useQuery } from 'react-query';
import PostService from '../PostService';
import { userPostUrlFilter } from './postPagination';

async function getMyPostsData(params: string) {
  const res = await PostService.getMyPostsData(params);
  return res.data.body.data;
}

export function useGetMyPostsData(category: string, page = 0, size: number) {
  const { data: userPostData } = useQuery(
    [`myPost/${userPostUrlFilter(category, page, size)}`],
    () => getMyPostsData(userPostUrlFilter(category, page, size)),
  );
  return { userPostData: userPostData && userPostData };
}
