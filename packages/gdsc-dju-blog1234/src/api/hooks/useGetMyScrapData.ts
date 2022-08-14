import { useQuery } from 'react-query';
import PostService from '../PostService';
import Cookies from 'js-cookie';
import { RowScrapDataType } from '../../types/postData';

async function getMyScrapData() {
  const res = await PostService.getMyScrapData();
  return res.data;
}

export function useGetMyScrapData() {
  const token = Cookies.get('token');

  const { data: scrapData } = useQuery<RowScrapDataType>(
    [token],
    () => getMyScrapData(),
    {
      enabled: !!token,
    },
  );
  return {
    scrapData: scrapData?.body,
  };
}
