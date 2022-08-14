import { useQuery } from 'react-query';
import PostService from '../PostService';
import { userPostTempUrlFilter } from './postPagination';

async function getMyPostListTempData(params: string) {
  const res = await PostService.getMyPostsTempData(params);
  return res.data.body.data;
}
export function useGetMyPostsTempData(
  category: string,
  page = 0,
  size: number,
) {
  const { data: userPostTempData } = useQuery(
    [`myPost/temp${userPostTempUrlFilter(category, page, size)}`],
    () => getMyPostListTempData(userPostTempUrlFilter(category, page, size)),
  );
  return { userPostTempData: userPostTempData && userPostTempData };
}
