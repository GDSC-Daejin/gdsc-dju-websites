import { usePostBookMark } from '@src/api/hooks/usePostBookMark';
import React from 'react';
import { useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';
import PostService from '../api/PostService';
import { alertState } from '../store/alert';

export const useSetBookMark = (
  id: number | undefined,
  token: string,
  setMarked: (check: boolean) => void,
) => {
  const [alert, setAlert] = useRecoilState(alertState);
  const { mutate, isLoading, isSuccess } = usePostBookMark();

  const queryClient = useQueryClient();

  const bookMarkHandler = async () => {
    setMarked(true);

    if (token && id) {
      if (!isLoading) {
        mutate(id);
        if (isSuccess) {
          queryClient.invalidateQueries([`${token}-scrapList`]);
        } else setMarked(false);
      }
    } else {
      setAlert({
        ...alert,
        alertStatus: 'error',
        alertHandle: true,
        alertMessage: '로그인이 필요해요.',
      });
    }
  };
  return { bookMarkHandler };
};
