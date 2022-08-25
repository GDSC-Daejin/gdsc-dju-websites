import RightArrowIcon from '@assets/icons/RightArrowIcon';
import React from 'react';
import LeftArrowIcon from '../../../assets/icons/LeftArrowIcon';

import {
  ArrowWrapper,
  Number,
  NumberCircle,
  NumberSection,
  NumberWrapper,
  PageBarWrapper,
} from './styled';

const circleMotion = {
  isActive: {
    opacity: 1,
    y: 0,
  },
  isUnActive: {
    y: -10,
    opacity: 0,
  },
};
const PageBar = (props: {
  currentPage: number;
  totalPage: number;
  nickname?: string;
  type?: string;
  onClick: (page: number, limit?: number) => void;
}) => {
  const { currentPage, totalPage, onClick } = props;

  const division = (array: number[], num: number) => {
    const length = array.length;
    const copy = [...array];
    const divide =
      Math.floor(length / num) + (Math.floor(length % num) > 0 ? 1 : 0);
    const newArray = [];
    for (let i = 0; i <= divide; i++) {
      newArray.push(copy.splice(0, num));
    }
    return newArray;
  };

  const array = Array(totalPage)
    .fill(0)
    .map((data, i) => {
      return i + 1;
    });

  const divideArray = () => {
    const PAGE_LENGTH = 8;
    const PAGES = division(array, PAGE_LENGTH - 1);
    const pageNum = Math.floor(currentPage / PAGE_LENGTH);
    return PAGES[pageNum];
  };

  return (
    <PageBarWrapper>
      {totalPage !== 1 && (
        <ArrowWrapper onClick={() => onClick(currentPage - 1)}>
          <LeftArrowIcon />
        </ArrowWrapper>
      )}
      <NumberSection>
        {divideArray().map((num, id) => (
          <NumberWrapper
            key={id}
            onClick={() => onClick(num)}
            active={currentPage === num}
          >
            <NumberCircle
              variants={circleMotion}
              animate={currentPage === num ? 'isActive' : 'isUnActive'}
            />
            <Number>{num}</Number>
          </NumberWrapper>
        ))}
      </NumberSection>
      {totalPage !== 1 && (
        <ArrowWrapper onClick={() => onClick(currentPage + 1, totalPage + 1)}>
          <RightArrowIcon />
        </ArrowWrapper>
      )}
    </PageBarWrapper>
  );
};

export default PageBar;
