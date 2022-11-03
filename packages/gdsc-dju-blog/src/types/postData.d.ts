export interface DetailPostDataType {
  modifiedAt: string;
  uploadDate: string;
  example: string;
  category: {
    categoryName: string;
    uploadDate: string;
  };
  content: string;
  postHashTags: string[];
  postId: number;
  userId: string;
  title: string;
  likes: string[];
  imagePath: string;
  memberInfo: AuthorProps;
}

export interface AuthorProps {
  nickname: string;
  profileImageUrl: string;
  role: string;
}

export interface RowPostDataType {
  body: {
    data: DetailPostDataType;
  };
}
export interface PostPostDataType {
  base64Thumbnail: string;
  fileName: string;
  title: string;
  category: {
    categoryName: string;
  };
  content: string;
  postHashTags: string[];
  tmpStore: boolean | undefined;
}
boolean | undefined;
}
export interface RowPostListType {
  body: {
    data: PostListResponse;
  };
}
interface PostListResponse {
  content: DetailPostDataType[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  first: boolean;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  numberOfElements: number;
  size: number;
  number: number;
  empty: boolean;
}

export interface RowScrapList {
  body: {
    data: ScrapList;
  };
}
export type ScrapList = number[];
