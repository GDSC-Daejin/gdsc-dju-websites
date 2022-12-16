import { useQuery } from 'react-query';

import Cookies from 'js-cookie';

import { Position } from '@type/position';
import { createCategoryUrl, createQueryKey } from '@utils/createQueryKey';

import PostService from '../PostService';

async function getMyScrapData(params: string) {
  const res = await PostService.getMyScrapData(params);
  return res.data.body.data;
}

export function useGetMyScrapData(category: Position, page = 0, size = 16) {
  const token = Cookies.get('token');

  const obj = {
    page: page,
    size: size,
  };
  const key = createQueryKey('myScrap', {
    category: category,
    ...obj,
  });

  const { data: scrapData } = useQuery(
    [key],
    () => getMyScrapData(createCategoryUrl(category, obj)),
    {
      enabled: Boolean(token),
    },
  );
  return {
    scrapData: scrapData,
  };
}
