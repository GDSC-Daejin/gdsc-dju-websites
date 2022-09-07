import axios from 'axios';
import Cookies from 'js-cookie';
import {
  PostPostDataType,
  RowPostDataType,
  RowPostListType,
  RowScrapList,
} from '@type/postData';

import { Api } from './index';
import Auth from './AuthService';

class PostService extends Api {
  //전체 포스트
  getPostData = (postId: string) => {
    return Auth.get<RowPostDataType>(`${this.BLOG_API}/api/v1/post/${postId}`);
  };
  getPostsData = (params: string) => {
    return axios.get<RowPostListType>(
      `${this.BLOG_API}/api/v1/post/list${params}`,
    );
  };
  //내 포스트
  getMyPostData = (postId: string) => {
    return Auth.get<RowPostDataType>(
      `${this.BLOG_API}/api/guest/v1/myPost/${postId}`,
    );
  };
  getMyPostsData = (params: string) => {
    return Auth.get<RowPostListType>(
      `${this.BLOG_API}/api/guest/v1/myPost/${params}`,
    );
  };

  getMyPostsTempData = (params: string) => {
    return Auth.get<RowPostListType>(
      `${this.BLOG_API}/api/guest/v1/myPost/temp${params}`,
    );
  };
  getMyPostsNotTempData = (params: string) => {
    return Auth.get<RowPostListType>(
      `${this.BLOG_API}/api/guest/v1/myPost/notTemp${params}`,
    );
  };
  getUserPostsNotTempData = (userId: string, params: string) => {
    return axios.get<RowPostListType>(
      `${this.BLOG_API}/api/v1/${userId}/notTemp/${params}`,
    );
  };
  postMyPostData = (postData: PostPostDataType) => {
    return Auth.post(`${this.BLOG_API}/api/member/v2/post`, postData);
  };
  updateMyPostData = (postData: PostPostDataType, postId: string) => {
    return Auth.put(`${this.BLOG_API}/api/member/v2/post/${postId}`, postData);
  };
  deleteMyPostData = (postId: number) => {
    return Auth.delete(`${this.BLOG_API}/api/member/v2/post/${postId}`);
  };
  getMyScrapList = () => {
    return Auth.get<RowScrapList>(`${this.BLOG_API}/api/guest/v1/myScrap/list`);
  };
  getMyScrapData = (params: string) => {
    return Auth.get<RowPostListType>(
      `${this.BLOG_API}/api/guest/v1/myScrap${params}`,
    );
  };

  updateMyScrapData = (postId: number) => {
    const token = Cookies.get('token');
    return axios.post(
      `${this.BLOG_API}/api/guest/v1/scrap/${postId}`,
      {
        authorities: [
          {
            authority: `Bearer ${token}`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
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
    return axios.get(
      `${
        this.BLOG_API
      }/api/v1/post/search/${searchContent}?page=${page}&size=${16}`,
    );
  };
}
export default new PostService();
