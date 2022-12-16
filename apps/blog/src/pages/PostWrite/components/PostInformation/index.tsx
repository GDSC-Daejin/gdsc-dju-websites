import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { TagInput } from '@gdsc-dju/styled-components';

import {
  PostInfoWrapper,
  PostInputWrapper,
  PostTitleInput,
  SavesButtonWrapper,
} from '@pages/PostWrite/components/PostInformation/styled';
import { GDSCButton } from '@src/components/atoms/Button';
import ThumbnailInput from '@src/components/atoms/input/ThumbnailInput';
import PostCategoryMenu from '@src/components/layouts/PostCategoryMenu';
import { useFileToBase64 } from '@src/hooks/useFileToBase64';
import { PostPostDataType } from '@type/postData';

interface Props {
  postData: PostPostDataType;
  setPostData: Dispatch<SetStateAction<PostPostDataType>>;
  setCategory: (category: string) => void;
}

const PostWriteHeader = ({ postData, setPostData, setCategory }: Props) => {
  const [tage, setTage] = useState<string[]>([]);
  const navigate = useNavigate();
  const input = useRef<HTMLInputElement>(null);
  const { base64 } = useFileToBase64(input);
  useEffect(() => {
    base64 &&
      setPostData({
        ...postData,
        base64Thumbnail: base64,
      });
  }, [base64]);

  useEffect(() => {
    setPostData({ ...postData, postHashTags: tage });
  }, [tage]);

  return (
    <>
      <PostCategoryMenu
        onClick={setCategory}
        category={postData.category.categoryName}
      />
      <PostInfoWrapper>
        <ThumbnailInput ref={input} imageValue={postData.base64Thumbnail} />
        <PostInputWrapper>
          <PostTitleInput
            placeholder="제목을 입력하세요."
            value={postData.title}
            onChange={(e) => {
              setPostData((prev) => {
                return { ...prev, title: e.target.value };
              });
            }}
          />
          <TagInput
            onChange={setTage}
            borderless={true}
            maxTags={4}
            placeholder={'띄어쓰기로 태그를 추가할 수 있어요.'}
          />
        </PostInputWrapper>
      </PostInfoWrapper>
      <SavesButtonWrapper>
        <GDSCButton
          text="임시글"
          onClick={() => {
            navigate(`/post/saves`);
          }}
        />
      </SavesButtonWrapper>
    </>
  );
};

export default PostWriteHeader;
