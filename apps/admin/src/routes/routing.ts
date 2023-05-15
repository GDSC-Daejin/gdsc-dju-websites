import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRouter = () => {
  const navigate = useNavigate();
  return useMemo(() => {
    return {
      back(steps = 1) {
        navigate(-steps);
      },
      push(path: RoutePath) {
        navigate({
          pathname: path,
        });
      },
    };
  }, [navigate]);
};

export type RoutePath = '/' | `/users` | `/users/${string}`;
