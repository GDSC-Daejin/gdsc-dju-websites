import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { stringify } from 'qs';

export const useRouter = () => {
  const navigate = useNavigate();
  return useMemo(() => {
    return {
      back(steps = 1) {
        navigate(-steps);
      },
      push(path: RoutePath, search?: any) {
        navigate({
          pathname: path,
          search: search ? stringify(search, { indices: false }) : undefined,
        });
      },
    };
  }, [navigate]);
};
export type RoutePath = '/weekly' | '/';
