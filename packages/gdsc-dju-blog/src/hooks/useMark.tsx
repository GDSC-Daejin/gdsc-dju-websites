import { debounce } from '@utils/debounce';
import React from 'react';
import { usePostBookMark } from '@src/api/hooks/usePostBookMark';
import { useCookies } from 'react-cookie';
import { useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';
import { alertState } from '../store/alert';

export default function (id: number) {
  const [cookie] = useCookies(['token']);

  const queryClient = useQueryClient();
  const { mutate, isSuccess } = usePostBookMark();

  const scrap_List: number[] =
    queryClient.getQueryData([`${cookie.token}-scrapList`]) ?? [];

  const [alert, setAlert] = useRecoilState(alertState);
  const [isMark, setMark] = React.useState(scrap_List.includes(id));

  // eslint-disable-next-line no-console
  console.log(isMark);

  const setIsMark = async () => {
    if (cookie.token && id) {
      mutate(id);
      if (isSuccess) {
        queryClient.setQueryData(
          [`${cookie.token}-scrapList`],
          (oldData: any) => {
            const index = oldData?.indexOf(id);
            // scrap된 데이터라면
            if (index !== -1)
              return [...oldData.slice(0, index), ...oldData.slice(index + 1)];
            return [...oldData, id];
          },
        );
        setMark(!isMark);
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
  const debounceSetIsMark = debounce(setIsMark, 300);

  return { isMark, debounceSetIsMark };
}
