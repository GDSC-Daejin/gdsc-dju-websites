export interface PostData {
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

interface PostListResponse {
  content: PostData[];
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

export type ScrapList = number[];
