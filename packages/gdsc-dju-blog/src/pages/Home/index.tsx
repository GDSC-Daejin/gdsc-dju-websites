import React, { useState } from 'react';

import { useGetMyScrapList } from '@src/api/hooks/useGetMyScrapList';
import { useGetPostsData } from '@src/api/hooks/useGetPostsData';
import HomeLayout from '@templates/home/HomeLayout';
import { Position } from '@type/position';

function Home() {
  const [category, setCategory] = useState<Position>('all');

  const { postListData } = useGetPostsData(category, 0, 11);
  const { scrapList } = useGetMyScrapList();

  return (
    <HomeLayout
      postListData={postListData}
      scrapList={scrapList}
      category={category}
      setCategory={setCategory}
    />
  );
}

export default Home;
