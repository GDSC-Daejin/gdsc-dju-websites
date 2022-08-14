import React from 'react';
import { useRecoilState } from 'recoil';
import PostService from '../api/PostService';
import { alertState } from '../store/alert';

export const useSetBookMark = (
  id: number | undefined,
  token: string,
  setMarked: (check: boolean) => void,
) => {
  const [alert, setAlert] = useRecoilState(alertState);

  const bookMarkHandler = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (token && id) {
      const result = await setBookMarkPostAPI(id);
      if (result.body.message === 'SUCCESS') setMarked(true);
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

export async function setBookMarkPostAPI(postId: number) {
  const res = await PostService.updateMyScrapData(postId);
  return res.data;
}
