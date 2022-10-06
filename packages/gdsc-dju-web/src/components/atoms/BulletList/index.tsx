import React from 'react';

import { SubCategory } from '../Title/title';

import { StyledLi } from './styled';

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
    <div>
      <SubCategory>{title}</SubCategory>
      {bulletText && <BulletList text={bulletText} />}
      {text && <>{text}</>}
    </div>
  );
};

export { BulletList, SubtitleContent };
