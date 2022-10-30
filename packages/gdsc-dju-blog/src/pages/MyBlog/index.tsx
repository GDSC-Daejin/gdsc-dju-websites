import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Post from '@pages/Post';
import { position } from '@type/position';

import BlogHome from './BlogHome';
import MyScrap from './MyScrap';
import ProfileEdit from './ProfileEdit';

const MyBlog = () => {
  return (
    <Routes>
      <Route path={'/'} element={<BlogHome />} />
      {position.map((pos) => (
        <Route
          path={`/${pos}`}
          element={<BlogHome position={pos} />}
          key={pos}
        />
      ))}
      <Route path={'/:postId'} element={<Post />} />
      <Route path={'/edit'} element={<ProfileEdit />} />
      <Route path={'/likes'} element={<MyScrap />} />
    </Routes>
  );
};

export default MyBlog;
