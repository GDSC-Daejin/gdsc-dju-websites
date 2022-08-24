import React from 'react';

import {
  NavDesign,
  NavInner,
  NavTask,
  NavTaskWrapper,
  NavWrapper,
  Search,
  SearchInputWrapper,
  StyledLogoWrapper,
} from './styled';

import GdscBlogLogo from '../../../assets/logos/GdscBlogLogo';
import { useNavigate } from 'react-router';
import MenuToggleIcon from '@src/components/atoms/MenuToggleIcon';
import SideBar from '@src/components/organisms/SideBar';
import SearchIcon from '@assets/icons/SearchIcon';

function Navigation() {
  return (
    <NavDesign>
      <NavWrapper>
        <NavInner>
          <NavTaskWrapper>
            <NavTask>
              <MenuToggleIcon />
              <StyledLogoWrapper href={'/'}>
                <GdscBlogLogo />
              </StyledLogoWrapper>
            </NavTask>
          </NavTaskWrapper>
          <SearchInput />
        </NavInner>
      </NavWrapper>
      <SideBar />
    </NavDesign>
  );
}

const SearchInput: React.FC<{ onClick?: () => void }> = () => {
  const [searchData, setSearchData] = React.useState('');
  const navigate = useNavigate();
  const handleSearch = () => {
    if (searchData.trim() !== '') navigate(`/search/${searchData}/all?page=1`);
    setSearchData('');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };
  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <SearchInputWrapper>
      <Search
        name="search"
        value={searchData}
        onChange={handleChange}
        onKeyPress={handleOnKeyPress}
        type="text"
        placeholder="궁금한 정보나 계정을 입력해주세요"
      />
      <SearchIcon onClick={handleSearch} />
    </SearchInputWrapper>
  );
};
export default Navigation;
