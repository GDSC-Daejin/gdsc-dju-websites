import { useGetMyScrapList } from '../api/hooks/useGetMyScrapList';

export const useGetScrap = (postId?: number) => {
  const { scrap_List } = useGetMyScrapList();

  const isScrap = !!scrap_List?.find((id) => id === postId);
  return { isScrap, scrap_List };
};
