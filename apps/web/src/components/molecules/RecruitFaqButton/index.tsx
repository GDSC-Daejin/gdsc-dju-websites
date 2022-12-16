import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAtom } from 'jotai';
import styled from 'styled-components';

import { StyledButton } from '@atoms/Button/styled';
import { recruitmentAtom } from '@store/recruitmentStatusAtom';

const RecruitFaqButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 6px;
`;

const RecruitFaqButton = (props: { name: string }) => {
  const { name } = props;
  const [recruit] = useAtom(recruitmentAtom);
  const keyTyped = name as keyof typeof recruit;
  const navigate = useNavigate();
  return (
    <RecruitFaqButtonWrapper>
      <StyledButton
        background={'blue900'}
        onClick={() => {
          navigate('/faq');
        }}
      >
        자주 하는 질문
      </StyledButton>
      {recruit[`${keyTyped}`] ? (
        <StyledButton
          background={'blue900'}
          onClick={() => {
            navigate('/recruit/form/' + keyTyped);
          }}
        >
          지원하기
        </StyledButton>
      ) : (
        <StyledButton disable={!recruit[`${keyTyped}`]} background={'blue200'}>
          지원기간이 아닙니다.
        </StyledButton>
      )}
    </RecruitFaqButtonWrapper>
  );
};

export default RecruitFaqButton;
