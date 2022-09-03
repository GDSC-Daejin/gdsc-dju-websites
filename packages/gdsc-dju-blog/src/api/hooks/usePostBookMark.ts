import { useMutation } from 'react-query';
import PostService from '../PostService';

export const usePostBookMark = () => {
  const {
    data: bookMarkResponse,
    mutate,
    isLoading,
    isSuccess,
  } = useMutation(PostService.updateMyScrapData);

  return { bookMarkResponse, mutate, isLoading, isSuccess };
};
