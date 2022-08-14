export interface DetailPostDataType {
  modifiedAt: string;
  uploadDate: string;
  example: string;
  category: {
    categoryName: string;
    uploadDate: string;
  };
  content: string;
  postHashTags: string;
  postId: number;
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
  postHashTags: string;
  tmpStore: boolean | undefined;
}
export interface RowDetailPostListType {
  body: {
    data: {
      content: DetailPostDataType[];
      totalElements: number;
      totalPages: number;
      empty: boolean;
      first: boolean;
      last: boolean;
    };
  };
}

export interface SearchPostDataType {
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

export interface ScrapPostDataType {
  content: {
    post: DetailPostDataType[];
  };
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

export interface RowScrapDataType {
  body: {
    data: {
      content: ScrapDataType[];
    };
  };
}

interface ScrapDataType {
  post: ScrapPostDetailType[];
}

export interface RowScrapList {
  body: {
    data: ScrapList;
  };
}
export type ScrapList = number[];

export interface ScrapPostDetailType {
  postId: number;
  tmpStore: false;
  modifiedAt: string;
  uploadDate: string;
  postHashTags: string;
  memberInfo: {
    member: {
      profileImageUrl: string;
    };
    nickname: string;
  };
  category: {
    categoryName: string;
    modifiedAt: string;
    uploadDate: string;
  };
  title: string;
  imagePath: string;
  content: string;
}
