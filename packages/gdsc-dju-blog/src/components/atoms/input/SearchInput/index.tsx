import React, { InputHTMLAttributes, forwardRef } from 'react';

import SearchIcon from '@assets/icons/SearchIcon';
import { Search, SearchIconWrapper, SearchInputWrapper } from './styled';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onClick: () => void;
}

const SearchInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <SearchInputWrapper>
      <form onSubmit={props.onClick}>
        <Search ref={ref} name="search" type="text" {...props} />
        <SearchIconWrapper onClick={props.onClick}>
          <SearchIcon />
        </SearchIconWrapper>
      </form>
    </SearchInputWrapper>
  );
});

export default SearchInput;
