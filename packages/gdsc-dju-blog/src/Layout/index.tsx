import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Category from '../pages/Category';
import Home from '../pages/Home';
import MyBlog from '../pages/MyBlog';
import OauthRedirectPage from '../pages/OauthRedirectPage';
import PostSaves from '../pages/PostSaves';
import PostWrite from '../pages/PostWrite';
import SearchResult from '../pages/SearchResult';
import SignUp from '../pages/SignUp';

import ComponentLayout from './ComponentLayout';

const Layout = () => {
  return (
    <ComponentLayout>
      <Suspense>
        <Routes>
          <Route path={'/*'} element={<Home />} />
          <Route path={'/@:nickname/*'} element={<MyBlog />} />
          <Route path={'/post/write'} element={<PostWrite />} />
          <Route path={'/post/edit/:id'} element={<PostWrite />} />
          <Route path={'/category/*'} element={<Category />} />
          <Route path={'/category/:categoryName'} element={<Category />} />
          <Route path={'/signup'} element={<SignUp />} />
          <Route path={'/redirect'} element={<OauthRedirectPage />} />
          <Route path={'/search/:searchContent'} element={<SearchResult />} />
          <Route path={'/post/saves'} element={<PostSaves />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Suspense>
    </ComponentLayout>
  );
};

export default Layout;
