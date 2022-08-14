import { useGetMyScrapList } from '../api/hooks/useGetMyScrapList';

export const useGetScrap = (postId?: number) => {
  const { scrapList } = useGetMyScrapList();

  const isScrap = !!scrapList?.find((id) => id === postId);
  return { isScrap, scrapList };
};
