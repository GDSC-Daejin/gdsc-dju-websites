import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Category from '../pages/Category';
import SearchResult from '../pages/SearchResult';
import MyBlog from '../pages/MyBlog';
import Home from '../pages/Home';
import Post from '../pages/Post';
import PostSaves from '../pages/PostSaves';
import SignUp from '../pages/SignUp';
import OauthRedirectPage from '../pages/OauthRedirectPage';
import PostWrite from '../pages/PostWrite';
import ComponentLayout from './ComponentLayout';

const Layout = () => {
  return (
    <ComponentLayout>
      <Routes>
        <Route path={'/*'} element={<Home />} />
        <Route path={'/:user_name/*'} element={<MyBlog />} />
        <Route path={'/post'} element={<Post />} />
        <Route path={'/post/write'} element={<PostWrite />} />
        <Route path={'/post/edit/:id'} element={<PostWrite />} />
        <Route path={'/category/*'} element={<Category />} />
        <Route path={'/category/:categoryName'} element={<Category />} />
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/redirect'} element={<OauthRedirectPage />} />
        <Route path={'/search/:postContent'} element={<SearchResult />} />
        <Route path={'/post/saves'} element={<PostSaves />} />
      </Routes>
      <Footer />
    </ComponentLayout>
  );
};

export default Layout;
