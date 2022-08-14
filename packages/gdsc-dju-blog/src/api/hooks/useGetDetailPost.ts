import { useQuery } from 'react-query';
import PostService from '../PostService';

async function getDetailPost(postId: string) {
  const res = await PostService.getPostData(postId);
  return res.data;
}

export function useGetDetailPost(postId: string | undefined) {
  const { data: postData } = useQuery(
    [postId, `/post/${postId}`],
    () => getDetailPost(postId ?? ''),
    {
      enabled: !!postId,
    },
  );
  return {
    postData: postData && postData.body.data,
  };
}
