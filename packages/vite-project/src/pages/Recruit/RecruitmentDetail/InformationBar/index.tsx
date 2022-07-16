import React from 'react';
import { ElementWrapper, MinText, MinTitle } from './styled';

const InformationBar = (props: { name: string }) => {
  const { name } = props;
  return (
    <>
      <ElementWrapper>
        <MinTitle>소속</MinTitle>
        <MinText>{name}</MinText>
      </ElementWrapper>
      <ElementWrapper>
        <MinTitle>합류과정</MinTitle>
        <MinText>1차 서류 - 2차 면접</MinText>
      </ElementWrapper>
      <ElementWrapper>
        <MinTitle>활동기간</MinTitle>
        <MinText>1년이상</MinText>
      </ElementWrapper>
    </>
  );
};

export default InformationBar;
