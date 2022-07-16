import React from 'react';
import {
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../styles/layouts';
import {
  MainText,
  SubCategory,
  Title,
} from '../../components/common/Title/title';
import { codeOfConduct } from '../../apis/pageData/codeOfConduct';
import { BulletList } from '../../components/common/BulletList';

const CodeOfConduct = () => {
  return (
    <>
      <LayoutContainer>
        <ContainerInner>
          <TopMargin />
          <Title>Code of Conduct (Google)</Title>
          <TopMargin />
          {codeOfConduct.map((data) => (
            <>
              <SubCategory>{data.title}</SubCategory>
              <MainText>
                <BulletList text={data.content} />
              </MainText>
              <TopMargin />
            </>
          ))}
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
export default CodeOfConduct;
