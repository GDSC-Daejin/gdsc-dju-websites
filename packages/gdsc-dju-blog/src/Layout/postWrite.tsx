import React, { Dispatch, useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  PostContentWrapper,
  PostGDSCButtonWrapper,
  PostHashtag,
  PostInformation,
  PostLayoutWrapper,
  PostTitle,
} from './postWrite.styled';
import PostCategoryMenu from '@src/components/layouts/PostCategoryMenu';
import { DetailPostDataType, PostPostDataType } from '@type/postData';
import { GDSCButton } from '@src/components/atoms/Button';

import { ContentEditor } from '@src/components/atoms/toastUi';
import PostButtons from '@pages/PostWrite/components/PostButtons';
import ThumbnailInput from '@src/components/atoms/input/ThumbnailInput';
import { useFileToBase64 } from '@src/hooks/useFileToBase64';

interface PostWriteProps {
  postData: DetailPostDataType | undefined;
  submitHandler: (postData: PostPostDataType, type: string) => void;
  setFileImage: Dispatch<React.SetStateAction<string | null>>;

  id: string | undefined;
}

const PostWriteLayout: React.FC<PostWriteProps> = ({
  postData,
  submitHandler,
  setFileImage,
  id,
}) => {
  const [detailPostData, setDetailPostData] = useState<PostPostDataType>({
    base64Thumbnail: '',
    fileName: '',
    title: '',
    category: {
      categoryName: '',
    },
    content: '',
    postHashTags: '',
    tmpStore: undefined,
  });
  const editorRef: any = useRef();
  const input = useRef<HTMLInputElement>(null);
  const { base64 } = useFileToBase64(input);
  const navigate = useNavigate();

  const isUpdate = id !== undefined;
  const isButtonBlock =
    !detailPostData.category.categoryName ||
    !detailPostData.title ||
    detailPostData.content.length < 10;
  const setEditorValue = () => {
    const editorContent = editorRef.current.getInstance().getMarkdown();
    setDetailPostData(() => {
      return { ...detailPostData, content: editorContent };
    });
  };
  const setCategory = (category: string) => {
    setDetailPostData(() => {
      return { ...detailPostData, category: { categoryName: category } };
    });
  };
  useLayoutEffect(() => {
    if (!postData) return;
    setDetailPostData({
      ...detailPostData,
      title: postData.title,
      category: {
        categoryName: postData.category.categoryName.toLowerCase(),
      },
      content: postData.content,
      base64Thumbnail: postData.imagePath,
      postHashTags: postData.postHashTags,
    });
  }, [postData]);
  return (
    <PostLayoutWrapper>
      <PostCategoryMenu
        onClick={setCategory}
        category={detailPostData.category.categoryName}
      />
      <PostInformation>
        <ThumbnailInput
          ref={input}
          imageValue={detailPostData.base64Thumbnail}
        />
        <PostContentWrapper>
          <PostTitle
            placeholder="제목을 입력하세요."
            value={detailPostData.title}
            onChange={(e) => {
              setDetailPostData(() => {
                return { ...detailPostData, title: e.target.value };
              });
            }}
          />
          <PostHashtag
            placeholder={'#해시태그 ,로 구분하세요'}
            value={detailPostData.postHashTags}
            onChange={(e) => {
              setDetailPostData(() => {
                return { ...detailPostData, postHashTags: e.target.value };
              });
            }}
          />
        </PostContentWrapper>
      </PostInformation>
      <PostGDSCButtonWrapper>
        <GDSCButton
          text="임시글"
          onClick={() => {
            navigate(`/post/saves`);
          }}
        />
      </PostGDSCButtonWrapper>

      {id ? (
        detailPostData.content !== '' && (
          <ContentEditor content={detailPostData.content} ref={editorRef} />
        )
      ) : (
        <ContentEditor content={detailPostData.content} ref={editorRef} />
      )}

      <PostButtons
        isUpdate={isUpdate}
        postCancel={() => submitHandler(detailPostData, 'backBlock')}
        postSubmit={() => {
          submitHandler(detailPostData, isUpdate ? 'update' : 'uploadPost');
        }}
        disable={isButtonBlock}
        draft={() => {
          submitHandler(detailPostData, 'draft');
        }}
      />
    </PostLayoutWrapper>
  );
};

export default PostWriteLayout;
