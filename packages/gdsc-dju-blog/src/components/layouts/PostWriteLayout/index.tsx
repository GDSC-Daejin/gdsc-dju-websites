import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useRecoilState } from 'recoil';

import PostButtons from '@pages/PostWrite/components/PostButtons';
import PostWriteHeader from '@pages/PostWrite/components/PostInformation';
import PostService from '@src/api/PostService';
import { ContentEditor } from '@src/components/atoms/ToastUi';
import { alertState } from '@src/store/alert';
import { ModalType, modalState } from '@src/store/modal';
import { ContainerInner } from '@styles/layouts';
import { DetailPostDataType, PostPostDataType } from '@type/postData';

import { PostLayoutWrapper } from './styled';

interface PostWriteProps {
  postData: DetailPostDataType | undefined;
  id: string | undefined;
}

const Index: React.FC<PostWriteProps> = ({ postData, id }) => {
  const [detailPostData, setDetailPostData] = useState<PostPostDataType>({
    title: '',
    content: '',
    base64Thumbnail: '',
    category: { categoryName: '' },
    postHashTags: [],
    tmpStore: false,
    fileName: '',
  });
  const [modal, setModal] = useRecoilState(modalState);
  const [alert, setAlert] = useRecoilState(alertState);
  const editorRef = useRef<any>();

  const navigate = useNavigate();
  const isUpdate = id !== undefined;
  const isButtonBlock =
    detailPostData &&
    (!detailPostData.category.categoryName ||
      !detailPostData.title ||
      detailPostData.content.length < 10);

  const submitHandler = (type: string) => {
    //포스트
    if (type === 'uploadPost') {
      setModal({
        ...modal,
        isOpen: true,
        type: type as ModalType,
        onClick: () => handleSubmit(detailPostData, false),
      });
    }
    // 임시저장
    if (type === 'draft') {
      handleDraft(detailPostData, true);
    }
    if (type === 'update') {
      setModal({
        ...modal,
        isOpen: true,
        type: type as ModalType,
        onClick: () => updatePost(detailPostData),
      });
    }
    if (type === 'backBlock') {
      setModal({
        ...modal,
        isOpen: true,
        type: type as ModalType,
        onClick: () => navigate(`/category/all`),
      });
    }
  };
  const handleDraft = async (
    detailPostData: PostPostDataType,
    temp: boolean,
  ) => {
    const postData = { ...detailPostData, tmpStore: temp };
    try {
      await PostService.postMyPostData(postData);
      await setAlert({
        ...alert,
        alertStatus: 'success',
        alertHandle: true,
        alertMessage: '임시 저장에 성공했어요',
      });
      await navigate(`/category/all`);
    } catch (e) {
      setAlert({
        ...alert,
        alertStatus: 'error',
        alertHandle: true,
        alertMessage: '임시 저장에 실패했어요',
      });
    }
  };

  const handleSubmit = async (
    detailPostData: PostPostDataType,
    temp: boolean,
  ) => {
    const postData = {
      ...detailPostData,
      postHashTags: detailPostData.postHashTags.join(','),
      tmpStore: temp,
    };
    setModal({
      ...modal,
      isOpen: false,
    });
    try {
      //@ts-ignore
      //업로드 형식이 string이기 때문에 array를 join으로 string으로 변환
      await PostService.postMyPostData(postData);
      await navigate(`/category/all`);
      await setAlert({
        ...alert,
        alertStatus: 'success',
        alertHandle: true,
        alertMessage: '업로드에 성공했어요',
      });
    } catch (error) {
      setAlert({
        ...alert,
        alertStatus: 'error',
        alertHandle: true,
        alertMessage: '포스트 업로드에 실패했어요.',
      });
    }
  };
  const updatePost = async (detailPostData: PostPostDataType) => {
    const postData = {
      ...detailPostData,
      postHashTags: detailPostData.postHashTags.join(','),
      tmpStore: false,
    };
    setModal({
      ...modal,
      isOpen: false,
    });
    try {
      //@ts-ignore
      id && (await PostService.updateMyPostData(postData, id));
      await setAlert({
        ...alert,
        alertStatus: 'success',
        alertHandle: true,
        alertMessage: '업데이트에 성공했어요',
      });
      await navigate(`/category/all`);
    } catch (error) {
      setAlert({
        ...alert,
        alertStatus: 'error',
        alertHandle: true,
        alertMessage: '업데이트에 실패했어요',
      });
    }
  };
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

  useEffect(() => {
    if (!postData) {
      return;
    }
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
  }, [postData, id]);

  return (
    <PostLayoutWrapper>
      <ContainerInner>
        <PostWriteHeader
          postData={detailPostData}
          setPostData={setDetailPostData}
          setCategory={setCategory}
        />
      </ContainerInner>
      {id ? (
        detailPostData.content !== '' && (
          <ContentEditor
            content={detailPostData.content}
            onChange={setEditorValue}
            ref={editorRef}
          />
        )
      ) : (
        <ContentEditor
          content={detailPostData.content}
          onChange={setEditorValue}
          ref={editorRef}
        />
      )}
      <ContainerInner>
        <PostButtons
          isUpdate={isUpdate}
          disable={isButtonBlock}
          submitHandler={submitHandler}
        />
      </ContainerInner>
    </PostLayoutWrapper>
  );
};

export default Index;
