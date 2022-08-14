import Cookies from 'js-cookie';
import { useQuery } from 'react-query';
import PostService from '../PostService';

async function getMyScrapList() {
  const res = await PostService.getMyScrapList();
  return res.data.body.data;
}
export function useGetMyScrapList() {
  const token = Cookies.get('token');
  const { data: scrapList } = useQuery(
    [`${token}scrapList`],
    () => getMyScrapList(),
    {
      enabled: !!token,
    },
  );
  return {
    scrapList: scrapList,
  };
}
