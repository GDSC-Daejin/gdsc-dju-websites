import {
  PostPostDataType,
  RowPostDataType,
  RowPostListType,
  RowScrapList,
} from '@type/postData';
import Cookies from 'js-cookie';
import { AuthInstance, Instance } from './AuthService';

class PostService {
  //전체 포스트
  getPostData = (postId: string) => {
    return AuthInstance.get<RowPostDataType>(`/api/v1/post/${postId}`);
  };
  getPostsData = (params: string) => {
    return Instance.get<RowPostListType>(`/api/v1/post/list${params}`);
  };
  //내 포스트
  getMyPostData = (postId: string) => {
    return AuthInstance.get<RowPostDataType>(`/api/guest/v1/myPost/${postId}`);
  };
  getMyPostsData = (params: string) => {
    return AuthInstance.get<RowPostListType>(`/api/guest/v1/myPost/${params}`);
  };

  getMyPostsTempData = (params: string) => {
    return AuthInstance.get<RowPostListType>(
      `/api/guest/v1/myPost/temp${params}`,
    );
  };
  getMyPostsNotTempData = (params: string) => {
    return AuthInstance.get<RowPostListType>(
      `/api/guest/v1/myPost/notTemp${params}`,
    );
  };
  getUserPostsNotTempData = (userId: string, params: string) => {
    return Instance.get<RowPostListType>(`/api/v1/${userId}/notTemp/${params}`);
  };
  postMyPostData = (postData: PostPostDataType) => {
    return AuthInstance.post(`/api/member/v2/post`, postData);
  };
  updateMyPostData = (postData: PostPostDataType, postId: string) => {
    return AuthInstance.put(`/api/member/v2/post/${postId}`, postData);
  };
  deleteMyPostData = (postId: number) => {
    return AuthInstance.delete(`/api/member/v2/post/${postId}`);
  };
  getMyScrapList = () => {
    return AuthInstance.get<RowScrapList>(`/api/guest/v1/myScrap/list`);
  };
  getMyScrapData = (params: string) => {
    return AuthInstance.get<RowPostListType>(`/api/guest/v1/myScrap${params}`);
  };

  updateMyScrapData = (postId: number) => {
    const token = Cookies.get('token');
    return AuthInstance.post(`/api/guest/v1/scrap/${postId}`, {
      authorities: [
        {
          authority: `Bearer ${token}`,
        },
      ],
    });
  };
  getSearchPosts = ({
    searchContent,
    category,
    page,
  }: {
    searchContent: string;
    category: string;
    page: number;
  }) => {
    return Instance.get(
      `/api/v1/post/search/${searchContent}?page=${page}&size=${16}`,
    );
  };
}
export default new PostService();
