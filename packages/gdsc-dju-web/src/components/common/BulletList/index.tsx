import React from 'react';
import { StyledLi } from './styled';
import { MainText, SubCategory } from '../Title/title';

const BulletList = (props: { text: string }) => {
  const { text } = props;
  return (
    <>
      {text.split('\n').map((line, id) => {
        return (
          <StyledLi key={id}>
            {line}
            <br />
          </StyledLi>
        );
      })}
    </>
  );
};

const SubtitleContent: React.FC<{
  title: string;
  text?: string | undefined;
  bulletText?: string | undefined;
}> = ({ title, text, bulletText }) => {
  return (
    <MainText>
      <SubCategory>{title}</SubCategory>
      {bulletText && <BulletList text={bulletText} />}
      {text && <>{text}</>}
    </MainText>
  );
};

export { BulletList, SubtitleContent };
