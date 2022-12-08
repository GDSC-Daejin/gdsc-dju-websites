import React, { memo } from 'react';
import { useSearchParams } from 'react-router-dom';

import RightArrowIcon from '@assets/icons/RightArrowIcon';

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

interface Props {
  currentPage: number;
  totalPage: number;
}
const PageBar = ({ currentPage, totalPage }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageHandler = (page: number, limit?: number) => {
    if (page < 1) return;
    if (page === limit) return;
    else {
      setSearchParams({ ...searchParams, page: page.toString() });
    }
  };

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

  const array = new Array(totalPage).fill(0).map((data, i) => {
    return i + 1;
  });

  const divideArray = () => {
    const PAGE_LENGTH = 8;
    const PAGES = division(array, PAGE_LENGTH - 1);

    const pageNum = Math.floor(currentPage / PAGE_LENGTH);

    return PAGES[pageNum];
  };
  const arrayPage = divideArray();

  return (
    <PageBarWrapper>
      {totalPage !== 1 && (
        <ArrowWrapper onClick={() => pageHandler(currentPage - 1)}>
          <LeftArrowIcon />
        </ArrowWrapper>
      )}
      <NumberSection>
        {arrayPage &&
          arrayPage.map((num, id) => (
            <NumberWrapper
              key={id}
              onClick={() => pageHandler(num)}
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
        <ArrowWrapper
          onClick={() => pageHandler(currentPage + 1, totalPage + 1)}
        >
          <RightArrowIcon />
        </ArrowWrapper>
      )}
    </PageBarWrapper>
  );
};

export default memo(PageBar);
