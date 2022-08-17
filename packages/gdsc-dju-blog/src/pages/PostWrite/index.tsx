import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { modalState } from '@src/store/modal';

import { useGetMyPostData } from '@src/api/hooks/useGetMyPostData';
import { LayoutContainer } from '@styles/layouts';
import PostWriteLayout from '@src/components/layouts/PostWriteLayout';
/*color plugin*/

const PostWrite = () => {
  const [modal, setModal] = useRecoilState(modalState);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { postData } = useGetMyPostData(id);

  useEffect(() => {
    const preventGoBack = () => {
      // change start
      history.pushState(null, '', location.href);
      // change end
      setModal({
        ...modal,
        isOpen: true,
        type: 'backBlock',
        onClick: () => {
          navigate(`/category/all`);
          setModal({ ...modal, isOpen: false });
        },
      });
    };
    if (!location.pathname.includes('edit')) {
      history.pushState(null, '', location.href);
      window.addEventListener('popstate', preventGoBack);
    }
    return () => window.removeEventListener('popstate', preventGoBack);
  }, []);

  return (
    <LayoutContainer>
      <PostWriteLayout postData={postData} id={id} />
    </LayoutContainer>
  );
};

export default PostWrite;
