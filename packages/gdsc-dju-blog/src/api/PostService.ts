import {
  PostData,
  PostListResponse,
  PostPostDataType,
  ScrapList,
} from '@type/postData';
import { ResponseData } from '@type/type';

import { AuthBlogInstance, BlogInstance } from './Instance';

class PostService {
  //전체 포스트
  getPostData = (postId: string) => {
    return BlogInstance.get<ResponseData<PostData>>(`/api/v1/post/${postId}`);
  };
  getPostsData = (params: string) => {
    return BlogInstance.get<ResponseData<PostListResponse>>(
      `/api/v1/post/list${params}`,
    );
  };
  //내 포스트
  getMyPostData = (postId: string) => {
    return AuthBlogInstance.get<ResponseData<PostData>>(
      `/api/guest/v1/myPost/${postId}`,
    );
  };
  getMyPostsData = (params: string) => {
    return AuthBlogInstance.get<ResponseData<PostListResponse>>(
      `/api/guest/v1/myPost/${params}`,
    );
  };

  getMyPostsTempData = (params: string) => {
    return AuthBlogInstance.get<ResponseData<PostListResponse>>(
      `/api/guest/v1/myPost/temp${params}`,
    );
  };
  getMyPostsNotTempData = (params: string) => {
    return AuthBlogInstance.get<ResponseData<PostListResponse>>(
      `/api/guest/v1/myPost/notTemp${params}`,
    );
  };
  getUserPostsNotTempData = (userId: string, params: string) => {
    return BlogInstance.get<ResponseData<PostListResponse>>(
      `/api/v1/${userId}/notTemp/${params}`,
    );
  };
  postMyPostData = (postData: PostPostDataType) => {
    return AuthBlogInstance.post(`/api/member/v2/post`, postData, {});
  };
  updateMyPostData = (postData: PostPostDataType, postId: string) => {
    return AuthBlogInstance.put(`/api/member/v2/post/${postId}`, postData);
  };
  deleteMyPostData = (postId: number) => {
    return AuthBlogInstance.delete(`/api/member/v2/post/${postId}`);
  };
  getMyScrapList = () => {
    return AuthBlogInstance.get<ResponseData<ScrapList>>(
      `/api/guest/v1/myScrap/list`,
    );
  };
  getMyScrapData = (params: string) => {
    return AuthBlogInstance.get<ResponseData<PostListResponse>>(
      `/api/guest/v1/myScrap${params}`,
    );
  };

  updateMyScrapData = (postId: number) => {
    return AuthBlogInstance.post(`/api/guest/v1/scrap/${postId}`);
  };
  getSearchPosts = (param: string) => {
    return BlogInstance.get<ResponseData<PostListResponse>>(
      `/api/v1/post/search${param}`,
    );
  };
}
export default new PostService();
