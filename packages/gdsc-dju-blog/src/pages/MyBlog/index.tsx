import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BlogHome from './BlogHome';
import MyScrap from './MyScrap';
import ProfileEdit from './ProfileEdit';
import Post from '../Post';

const MyBlog = () => {
  return (
    <Routes>
      <Route path={'/*'} element={<BlogHome />} />
      <Route path={'/edit'} element={<ProfileEdit />} />
      <Route path={'/likes'} element={<MyScrap />} />
      <Route path={'/:postId'} element={<Post />} />
    </Routes>
  );
};

export default MyBlog;
