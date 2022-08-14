import { useQuery } from 'react-query';
import PostService from '../PostService';
import { userPostTempUrlFilter } from './postPagination';

async function getMyPostsNotTempData(params: string) {
  const res = await PostService.getMyPostsNotTempData(params);
  return res.data.body.data;
}
export function useGetMyPostsNotTempData(
  category: string,
  page = 0,
  size: number,
) {
  const { data: userPostNotTempData } = useQuery(
    [`myPost/temp${userPostTempUrlFilter(category, page, size)}`],
    () => getMyPostsNotTempData(userPostTempUrlFilter(category, page, size)),
  );
  return { userPostNotTempData: userPostNotTempData && userPostNotTempData };
}
