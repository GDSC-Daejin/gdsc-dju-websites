import React, { forwardRef } from 'react';
import {
  Search,
  SearchInputWrapper,
} from '@src/components/layouts/Navigation/styled';
import SearchIcon from '@assets/icons/SearchIcon';

interface Props {
  onClick: () => void;
}

const SearchInput = forwardRef<HTMLInputElement, Props>(({ onClick }, ref) => {
  return (
    <SearchInputWrapper>
      <form onSubmit={onClick}>
        <Search
          ref={ref}
          name="search"
          type="text"
          placeholder="궁금한 정보나 계정을 입력해주세요"
        />
        <SearchIcon onClick={onClick} />
      </form>
    </SearchInputWrapper>
  );
});

export default SearchInput;
