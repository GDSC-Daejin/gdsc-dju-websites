import { getMyScrapList } from '@src/api/hooks/useGetMyScrapList';
import { usePostBookMark } from '@src/api/hooks/usePostBookMark';
import { debounce } from '@utils/debounce';
import React from 'react';
import { useCookies } from 'react-cookie';
import { useQuery, useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';
import { alertState } from '../store/alert';

const fetchScrap = async (queryClient: any, key: string) => {
  return await queryClient.prefetchQuery([key], getMyScrapList, {
    staleTime: 60 * 10000,
  });
};

export default function (id: number) {
  const [cookie] = useCookies(['token']);
  const key = `${cookie.token}-scrapList`;

  const queryClient = useQueryClient();
  const { mutate } = usePostBookMark();
  const { data: scrap_List } = useQuery([key], getMyScrapList, {
    enabled: !!cookie.token && !queryClient.getQueryData([key]),
    staleTime: 60 * 10000,
  });

  const [alert, setAlert] = useRecoilState(alertState);
  const [isMark, setMark] = React.useState(scrap_List?.includes(id));

  React.useEffect(() => {
    setMark(scrap_List?.includes(id));
  }, [scrap_List]);

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
        if (index !== -1)
          return [...oldData.slice(0, index), ...oldData.slice(index + 1)];
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
