import React, { InputHTMLAttributes, forwardRef } from 'react';

import SearchIcon from '@assets/icons/SearchIcon';
import { Search, SearchIconWrapper, SearchInputWrapper } from './styled';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onClick: () => void;
}

const SearchInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.onClick();
    }
  };
  return (
    <SearchInputWrapper>
      <Search
        ref={ref}
        name="search"
        type="text"
        {...props}
        onKeyPress={onKeyPress}
      />
      <SearchIconWrapper onClick={props.onClick}>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchInputWrapper>
  );
});

export default SearchInput;
