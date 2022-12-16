import useMark from '@src/hooks/useMark';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import { useRecoilState } from 'recoil';

import BookmarkIcon from '@assets/icons/BookmarkIcon';
import PostEditIcon from '@assets/icons/PostEditIcon';
import TrashIcon from '@assets/icons/TrashIcon';
import { useGetScrap } from '@src/hooks/useGetScrap';
import { useSetBookMark } from '@src/hooks/useHandleBookMark';
import { alertState } from '@src/store/alert';
import { modalState } from '@src/store/modal';

import PostService from '../../../api/PostService';
import {
  BookmarkWrapper,
  PostEditIconWrapper,
  PostIconWrapper,
  PostTrashIconWrapper,
} from '../styled';

interface Props {
  isUser: boolean;
  postId: number;
}
const PostIconBox = ({ isUser, postId }: Props) => {
  const [modal, setModal] = useRecoilState(modalState);
  const [alert, setAlert] = useRecoilState(alertState);
  const { isMark, debounceSetIsMark } = useMark(postId);
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    debounceSetIsMark();
  };

  const navigate = useNavigate();
  const deleteHandler = async () => {
    setModal({ ...modal, isOpen: false });
    try {
      await PostService.deleteMyPostData(postId);
      await setAlert({
        ...alert,
        alertStatus: 'success',
        alertHandle: true,
        alertMessage: '글이 삭제되었어요.',
      });
      await navigate(-1);
    } catch (e) {
      setAlert({
        ...alert,
        alertStatus: 'error',
        alertHandle: true,
        alertMessage: '글 삭제에 실패했어요.',
      });
    }
  };
  const handleRemove = () => {
    setModal({
      ...modal,
      isOpen: true,
      type: 'deleteCheck',
      onClick: deleteHandler,
    });
  };

  return (
    <PostIconWrapper>
      <BookmarkWrapper onClick={handleClick}>
        <BookmarkIcon marked={isMark} height={'25'} />
      </BookmarkWrapper>
      {isUser && (
        <>
          <PostEditIconWrapper
            onClick={() => {
              navigate(`/post/edit/${postId}`);
            }}
          >
            <PostEditIcon marked={isUser} height={'25'} />
          </PostEditIconWrapper>
          <PostTrashIconWrapper onClick={isUser ? handleRemove : undefined}>
            <TrashIcon marked={isUser} height={'25'} />
          </PostTrashIconWrapper>
        </>
      )}
    </PostIconWrapper>
  );
};

export default PostIconBox;
