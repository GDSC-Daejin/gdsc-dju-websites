import { useQuery } from 'react-query';

import Cookies from 'js-cookie';

import PostService from '../PostService';

async function getMyScrapList() {
  const res = await PostService.getMyScrapList();
  return res.data.body.data;
}
export function useGetMyScrapList() {
  const token = Cookies.get('token');
  const { data: scrapList } = useQuery(
    [`${token}-scrapList`],
    () => getMyScrapList(),
    {
      enabled: !!token,
      suspense: true,
    },
  );
  return {
    scrapList,
  };
}
