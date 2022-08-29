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
<<<<<<< HEAD:packages/gdsc-dju-blog/src/components/layouts/Navigation/index.tsx
      <form onSubmit={handleSubmit}>
        <Search
          name="search"
          onChange={handleChange}
          type="text"
          placeholder="궁금한 정보나 계정을 입력해주세요"
        />
      </form>
      <SearchIcon onClick={onClick} />
=======
      <Search
        name="search"
        value={searchData}
        onChange={handleChange}
        onKeyPress={handleOnKeyPress}
        type="text"
        placeholder="궁금한 정보나 계정을 입력해주세요"
      />
      <SearchIcon onClick={handleSearch} />
>>>>>>> 5ec2cca35b4258a663fac6f7f27690ad215f7067:packages/gdsc-dju-blog/src/components/common/Navigation/index.tsx
    </SearchInputWrapper>
  );
};
export default Navigation;
