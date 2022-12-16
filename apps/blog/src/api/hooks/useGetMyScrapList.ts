import { useQuery } from 'react-query';

import Cookies from 'js-cookie';

import { createQueryKey } from '@utils/createQueryKey';

import PostService from '../PostService';

async function getMyScrapList() {
  const res = await PostService.getMyScrapList();
  return res.data.body.data;
}
export function useGetMyScrapList() {
  const token = Cookies.get('token');
  const key = createQueryKey('myScrap/list', {
    token: token,
  });
  const { data: scrapList } = useQuery([key], () => getMyScrapList(), {
    enabled: Boolean(token),
    suspense: true,
  });
  return {
    scrapList,
  };
}
