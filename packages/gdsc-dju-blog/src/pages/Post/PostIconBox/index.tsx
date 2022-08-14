import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import PostService from '../../../api/PostService';
import Bookmark from '../../../assets/Bookmark';
import PostEditIcon from '../../../assets/PostEditIcon';
import PostTrashIcon from '../../../assets/PostTrashIcon';
import { useGetScrap } from '../../../hooks/useGetScrap';
import { useSetBookMark } from '../../../hooks/useSetBookMark';
import { alertState } from '../../../store/alert';
import { modalState } from '../../../store/modal';
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
  const [cookie] = useCookies(['token']);
  const { isScrap } = useGetScrap(postId);
  const [isMarked, setIsMarked] = useState(false);
  const { bookMarkHandler } = useSetBookMark(postId, cookie.token, (check) =>
    setIsMarked(check),
  );

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
  useEffect(() => {
    setIsMarked(isScrap);
  }, [isScrap]);

  return (
    <PostIconWrapper>
      <BookmarkWrapper onClick={bookMarkHandler}>
        <Bookmark marked={isMarked} height={'25'} />
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
            <PostTrashIcon marked={isUser} height={'25'} />
          </PostTrashIconWrapper>
        </>
      )}
    </PostIconWrapper>
  );
};

export default PostIconBox;
