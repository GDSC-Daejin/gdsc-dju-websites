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

const SearchInput: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const [searchData, setSearchData] = React.useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchData.trim() !== '') navigate(`/search/${searchData}?page=1`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  return (
    <SearchInputWrapper>
      <form onSubmit={handleSubmit}>
        <Search
          name="search"
          onChange={handleChange}
          type="text"
          placeholder="궁금한 정보나 계정을 입력해주세요"
        />
      </form>
      <SearchIcon onClick={onClick} />
    </SearchInputWrapper>
  );
};
export default Navigation;