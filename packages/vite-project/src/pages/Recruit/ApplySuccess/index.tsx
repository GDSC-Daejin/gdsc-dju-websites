import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ApplySuccessCard from '../../../components/common/ApplySuccessCard';
import ReactHelmet from '../../../components/common/ReactHelmet';
import { MainText } from '../../../components/common/Title/title';
import { ContainerInner, LayoutContainer } from '../../../styles/layouts';
import {
  RecruitFormCardWrapper,
  RecruitFormInner,
  RecruitFormWrapper,
} from '../RecruitForm/styled';
import { ApplyLink, ApplyLinkWrapper, ApplyMargin, ApplyTitle } from './styled';

const ApplySuccess = () => {
  const [searchParams] = useSearchParams();
  const username = searchParams.get('name');
  const position = searchParams.get('position');

  const params = Object.fromEntries(new URLSearchParams(location.search));

  return (
    <>
      <ReactHelmet title={'지원 완료'} />
      <LayoutContainer>
        <ContainerInner>
          <RecruitFormWrapper>
            <RecruitFormInner>
              <ApplyMargin />
              <ApplyMargin />
              <ApplyTitle>지원해주셔서 감사합니다.</ApplyTitle>
              <ApplyMargin />
              <RecruitFormCardWrapper>
                <ApplySuccessCard {...params} />
              </RecruitFormCardWrapper>
              <ApplyMargin />
              <MainText>{username}님의 지원서가 무사히 도착했어요 :)</MainText>
              <MainText>
                {position} 포지션에 지원해주셔서 진심으로 감사드려요.
              </MainText>
              <MainText>
                꼼꼼하게 서류를 검토한 뒤 빠르게 결과를 안내해드릴테니 조금만
                기다려주세요.
              </MainText>
              <MainText>
                각 전형결과에 관한 안내는 적어주신 메일로 안내되니 꼭
                확인부탁드려요.
              </MainText>
              <MainText>
                추가로 서류검토는 지원마감일로부터 최대 2주 소요될 수 있어요.
                만약 2주 이상 지났지만 연락을 받지 못했다면 GDSC DJU에
                문의해주세요.
              </MainText>
              <ApplyLinkWrapper>
                - 카카오톡:
                <ApplyLink
                  href={'https://open.kakao.com/o/sjN4kDsd'}
                  target={'_blank'}
                >
                  https://open.kakao.com/o/sjN4kDsd
                </ApplyLink>
              </ApplyLinkWrapper>
              <ApplyLinkWrapper>
                - 이메일:
                <ApplyLink href={'mailto:gdscdju@gmail.com'} target={'_blank'}>
                  gdscdju@gmail.com
                </ApplyLink>
              </ApplyLinkWrapper>{' '}
              <ApplyLinkWrapper>
                - 인스타그램:
                <ApplyLink
                  href={'https://www.instagram.com/gdsc.dju'}
                  target={'_blank'}
                >
                  @GDSC DJU
                </ApplyLink>
              </ApplyLinkWrapper>
              <ApplyMargin />
              <MainText>GDSC DJU 드림</MainText>
              <ApplyMargin />
            </RecruitFormInner>
          </RecruitFormWrapper>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default ApplySuccess;
