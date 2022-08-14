import React, { useEffect, useState } from 'react';
import { BlogCardButton } from './styled';

interface IBlogCardButton {
  scrollX: number;
  scrollRef: React.RefObject<HTMLDivElement>;
}

export const BlogCardScrollButton = ({
  scrollX,
  scrollRef,
}: IBlogCardButton) => {
  const [buttonDisabled, setButtonDisabled] = useState(-1);
  const ButtonNumber: number[] = [0, 1, 2];
  const SectionScrollWidth = 1907;
  const scrollMove = (buttonNumber: number) => {
    setButtonDisabled(buttonNumber);
    scrollRef.current?.scrollTo({
      top: 0,
      left: SectionScrollWidth * (buttonNumber / 2),
      behavior: 'smooth',
    });
    setTimeout(() => {
      setButtonDisabled(-1);
    }, 1000);
  };
  const ScrollBtnActive = (BtnActiveNumber: number) => {
    if (BtnActiveNumber === 0) {
      return scrollX >= 0 && scrollX < 634 ? true : false;
    } else if (BtnActiveNumber === 1) {
      return scrollX >= 634 && scrollX < 1268 ? true : false;
    } else if (BtnActiveNumber === 2) return scrollX >= 1268 && true;
    else return false;
  };

  return (
    <>
      {ButtonNumber.map((BtnNumber: number, index: number) => (
        <BlogCardButton
          key={index}
          ButtonActive={ScrollBtnActive(BtnNumber)}
          onClick={() => scrollMove(BtnNumber)}
          disabled={buttonDisabled === BtnNumber && true}
        />
      ))}
    </>
  );
};

export default BlogCardScrollButton;
