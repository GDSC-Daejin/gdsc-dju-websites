import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { modalState } from '@src/store/modal';
import PostWriteLayout from '@src/Layout/postWrite';
import { alertState } from '@src/store/alert';
import { useGetMyPostData } from '@src/api/hooks/useGetMyPostData';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
/*color plugin*/

export const PostCategoryMenuData = [
  {
    title: 'Frontend'.toLowerCase(),
  },
  {
    title: 'Backend'.toLowerCase(),
  },
  {
    title: 'Android'.toLowerCase(),
  },
  {
    title: 'Design'.toLowerCase(),
  },
  {
    title: 'Common'.toLowerCase(),
  },
];

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
