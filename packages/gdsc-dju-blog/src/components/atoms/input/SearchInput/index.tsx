import React, { forwardRef } from 'react';

import SearchIcon from '@assets/icons/SearchIcon';
import { Search, SearchIconWrapper, SearchInputWrapper } from './styled';

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
        <SearchIconWrapper onClick={onClick}>
          <SearchIcon />
        </SearchIconWrapper>
      </form>
    </SearchInputWrapper>
  );
});

export default SearchInput;
