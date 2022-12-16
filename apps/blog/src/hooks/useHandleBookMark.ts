import { useQueryClient } from 'react-query';

import { useRecoilState } from 'recoil';

import { usePostBookMark } from '@src/api/hooks/usePostBookMark';

import { alertState } from '../store/alert';

export const useSetBookMark = (
  id: number | undefined,
  token: string,
  setMarked: (check?: boolean) => void,
) => {
  const [alert, setAlert] = useRecoilState(alertState);
  const { mutate, isLoading, isSuccess } = usePostBookMark();
  const queryClient = useQueryClient();

  const bookMarkHandler = async () => {
    if (token && id) {
      if (!isLoading) {
        mutate(id);
        if (isSuccess) {
          queryClient.setQueryData([`${token}-scrapList`], (oldData: any) => {
            const index = oldData?.indexOf(id);
            // scrap된 데이터
            if (index !== -1)
              return [...oldData.slice(0, index), ...oldData.slice(index + 1)];
            return [...oldData, id];
          });
          setMarked(true);
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

  return { bookMarkHandler, isLoading, isSuccess };
};
