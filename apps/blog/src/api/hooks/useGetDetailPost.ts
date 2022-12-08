import { useQuery } from 'react-query';

import { createQueryKey } from '@utils/createQueryKey';

import PostService from '../PostService';

async function getDetailPost(postId: string) {
  const res = await PostService.getPostData(postId);
  return res.data;
}

export function useGetDetailPost(postId: string | undefined) {
  const key = createQueryKey('post', {
    postId: postId,
  });

  const { data: postData } = useQuery([key], () => getDetailPost(postId!), {
    enabled: Boolean(postId),
  });
  return {
    postData: postData && postData.body.data,
  };
}
