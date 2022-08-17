import React from 'react';
import styled from 'styled-components';
import { GDSCButton } from '@src/components/atoms/Button';

export const PostBottomButtonBox = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 40px;
  margin-bottom: 200px;
  gap: 11px;
`;
const PostButtons: React.FC<{
  submitHandler: (type: string) => void;
  disable: boolean;
  isUpdate: boolean;
}> = ({ disable, isUpdate, submitHandler }) => {
  return (
    <PostBottomButtonBox>
      <GDSCButton text="작성취소" onClick={() => submitHandler('backBlock')} />
      <GDSCButton
        text="임시저장"
        onClick={() => submitHandler('draft')}
        disable={disable}
      />
      <GDSCButton
        text={isUpdate ? '수정하기' : '업로드'}
        onClick={() => {
          !disable &&
            (isUpdate ? submitHandler('update') : submitHandler('uploadPost'));
        }}
        color={'googleBlue'}
        disable={disable}
      />
    </PostBottomButtonBox>
  );
};

export default PostButtons;
