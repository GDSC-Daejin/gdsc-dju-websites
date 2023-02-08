import { useRouter as useRoute } from 'next/router';
import { stringify } from 'qs';

export const useRouter = () => {
  const { push, back, pathname } = useRoute();
  return {
    pathname,
    push: (path: RoutePath, search?: any) =>
      push({
        pathname: path,
        search: search ? stringify(search, { indices: false }) : undefined,
      }),
    back: () => back(),
  };
};

type RoutePath = '/' | '/about' | '/faq' | '/recruit';
