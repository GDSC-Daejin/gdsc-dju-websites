import React from 'react';
import { StyledButton } from '../../../../components/common/Button/styled';
import { useRecoilState } from 'recoil';
import { recruitmentState } from '../../../../store/recruitHandler';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
  const [recruit] = useRecoilState(recruitmentState);
  const keyTyped = name as keyof typeof recruit;
  const navigate = useNavigate();
  return (
    <RecruitFaqButtonWrapper>
      <StyledButton
        background={'tossBlue'}
        onClick={() => {
          navigate('/faq');
        }}
      >
        자주 하는 질문
      </StyledButton>
      {recruit[`${keyTyped}`] ? (
        <StyledButton
          background={'tossBlue'}
          onClick={() => {
            navigate('/recruit/form/' + keyTyped);
          }}
        >
          지원하기
        </StyledButton>
      ) : (
        <StyledButton
          disable={!recruit[`${keyTyped}`]}
          background={'tossBlue200'}
        >
          지원기간이 아닙니다.
        </StyledButton>
      )}
    </RecruitFaqButtonWrapper>
  );
};

export default RecruitFaqButton;
