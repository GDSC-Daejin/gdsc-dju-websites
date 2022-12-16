import { useQuery } from 'react-query';

import { createQueryKey } from '@utils/createQueryKey';

import PostService from '../PostService';

async function getMyPostData(postId: string | undefined) {
  if (postId) {
    const res = await PostService.getMyPostData(postId);
    return res.data;
  }
}

export function useGetMyPostData(postId: string | undefined) {
  const key = createQueryKey('myPost', {
    postId: postId,
  });

  const { data: postData } = useQuery([key], () => getMyPostData(postId), {
    enabled: Boolean(postId),
  });
  return {
    postData: postData && postData.body.data,
  };
}
