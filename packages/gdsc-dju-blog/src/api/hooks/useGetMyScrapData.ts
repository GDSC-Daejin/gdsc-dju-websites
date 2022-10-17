import { useQuery } from 'react-query';

import Cookies from 'js-cookie';

import { postUrlFilter } from '@src/api/hooks/postPagination';

import PostService from '../PostService';

async function getMyScrapData(params: string) {
  const res = await PostService.getMyScrapData(params);
  return res.data.body.data;
}

export function useGetMyScrapData(category: string, page = 0, size: number) {
  const token = Cookies.get('token');

  const { data: scrapData } = useQuery(
    [`myPost/temp${postUrlFilter(category, page, size)}`],
    () => getMyScrapData(postUrlFilter(category, page, size)),
    {
      enabled: Boolean(token),
    },
  );
  return {
    scrapData: scrapData,
  };
}
