import Cookies from 'js-cookie';
import { useQuery, useQueryClient } from 'react-query';
import PostService from '../PostService';

export async function getMyScrapList() {
  const res = await PostService.getMyScrapList();
  return res.data.body.data;
}
export function useGetMyScrapList() {
  const token = Cookies.get('token');
  const queryClient = useQueryClient();

  const { data: scrap_List } = useQuery(
    [`${token}-scrapList`],
    getMyScrapList,
    {
      enabled: !!token && !queryClient.getQueryData([`${token}-scrapList`]),
      staleTime: 600 * 1000,
    },
  );

  return {
    scrap_List,
  };
}
