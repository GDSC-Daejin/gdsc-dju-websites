import axios from 'axios';
import Cookies from 'js-cookie';
import {
  PostPostDataType,
  RowDetailPostListType,
  RowPostDataType,
  RowScrapList,
} from '../types/postData';
import { Api } from './index';

class PostService extends Api {
  //전체 포스트
  getPostData = (postId: string) => {
    return axios.get<RowPostDataType>(
      `${this.BLOG_API}/api/v1/post/${postId}`,
      this.Header,
    );
  };
  getPostsData = (params: string) => {
    return axios.get<RowDetailPostListType>(
      `${this.BLOG_API}/api/v1/post/list${params}`,
    );
  };
  //내 포스트
  getMyPostData = (postId: string) => {
    return axios.get<RowPostDataType>(
      `${this.BLOG_API}/api/guest/v1/myPost/${postId}`,
      this.Header,
    );
  };
  getMyPostsData = (params: string) => {
    return axios.get<RowDetailPostListType>(
      `${this.BLOG_API}/api/guest/v1/myPost/${params}`,
      this.Header,
    );
  };

  getMyPostsTempData = (params: string) => {
    return axios.get<RowDetailPostListType>(
      `${this.BLOG_API}/api/guest/v1/myPost/temp${params}`,
      this.Header,
    );
  };
  getMyPostsNotTempData = (params: string) => {
    return axios.get<RowDetailPostListType>(
      `${this.BLOG_API}/api/guest/v1/myPost/notTemp${params}`,
      this.Header,
    );
  };
  postMyPostData = (postData: PostPostDataType) => {
    return axios.post(
      `${this.BLOG_API}/api/member/v2/post`,
      postData,
      this.Header,
    );
  };
  updateMyPostData = (postData: PostPostDataType, postId: string) => {
    return axios.put(
      `${this.BLOG_API}/api/member/v2/post/${postId}`,
      postData,
      this.Header,
    );
  };
  deleteMyPostData = (postId: number) => {
    return axios.delete(
      `${this.BLOG_API}/api/member/v2/post/${postId}`,
      this.Header,
    );
  };
  getMyScrapList = () => {
    return axios.get<RowScrapList>(
      `${this.BLOG_API}/api/guest/v1/myScrap/list`,
      this.Header,
    );
  };
  getMyScrapData = () => {
    return axios.get(`${this.BLOG_API}/api/guest/v1/myScrap`, this.Header);
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
  getSearchPosts = (postContent: string) => {
    return axios.get(`${this.BLOG_API}/api/v1/post/search/${postContent}`);
  };
}
export default new PostService();
