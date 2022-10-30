import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Position } from '@type/position';

export function useRouter() {
  const navigate = useNavigate();
  return useMemo(() => {
    return {
      back(steps = 1) {
        navigate(-steps);
      },
      push(path: RoutePath, search?: any) {
        navigate({
          pathname: path,
          // search: search ? stringify(search) : undefined,
        });
      },
    };
  }, [navigate]);
}

export type RoutePath =
  | '/'
  | `/@${string}/`
  | `/@${string}/${Position}`
  | `/@${string}/likes`
  | `/@${string}/edit`
  | `/@${string}/${string}`
  | '/post/write'
  | `/post/edit/${string}`
  | '/post/saves'
  | `/category${string}`
  | `/signup`
  | '/redirect'
  | `/search/${string}`;
