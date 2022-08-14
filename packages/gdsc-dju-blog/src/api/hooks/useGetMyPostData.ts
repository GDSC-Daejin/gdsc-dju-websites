import { useQuery } from 'react-query';
import PostService from '../PostService';

async function getMyPostData(postId: string | undefined) {
  if (postId) {
    const res = await PostService.getMyPostData(postId);
    return res.data;
  }
}

export function useGetMyPostData(postId: string | undefined) {
  const { data: postData } = useQuery(
    [postId, `/post/${postId}`],
    () => getMyPostData(postId),
    {
      enabled: !!postId,
    },
  );
  return {
    postData: postData && postData.body.data,
  };
}
