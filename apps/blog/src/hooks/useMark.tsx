import React from 'react';
import { useCookies } from 'react-cookie';
import { useQueryClient } from 'react-query';

import { useRecoilState } from 'recoil';

import { useGetMyScrapList } from '@src/api/hooks/useGetMyScrapList';
import { usePostBookMark } from '@src/api/hooks/usePostBookMark';
import { debounce } from '@utils/debounce';

import { alertState } from '../store/alert';

export default function (id: number) {
  const [cookie] = useCookies(['token']);
  const key = `${cookie.token}-scrapList`;

  const queryClient = useQueryClient();
  const { mutate } = usePostBookMark();
  const { scrapList } = useGetMyScrapList();

  const [alert, setAlert] = useRecoilState(alertState);
  const [isMark, setMark] = React.useState(scrapList?.includes(id) ?? false);

  React.useEffect(() => {
    setMark(scrapList?.includes(id) ?? false);
  }, [scrapList]);

  const setIsMark = async () => {
    if (cookie.token && id) {
      mutate(id, {
        onError: () => {
          setAlert({
            ...alert,
            alertStatus: 'error',
            alertHandle: true,
            alertMessage: '서버와 오류가 발생했습니다',
          });
        },
      });
      setMark(!isMark);
      queryClient.setQueryData([key], (oldData: any) => {
        const index = oldData?.indexOf(id);
        // scrap된 데이터라면
        if (index !== -1) {
          return [...oldData.slice(0, index), ...oldData.slice(index + 1)];
        }
        return [...oldData, id];
      });
    } else {
      setAlert({
        ...alert,
        alertStatus: 'error',
        alertHandle: true,
        alertMessage: '로그인이 필요해요.',
      });
    }
  };
  const debounceSetIsMark = debounce(setIsMark, 300);

  return { isMark, debounceSetIsMark };
}
