import React from 'react';

import { AnimatePresence } from 'framer-motion';

import { Title } from '@atoms/title';
import { FaqData } from '@contents/faq';
import FaqCard from '@organisms/faq/FaqCard';
import { TopMargin } from '@styles/layouts';

const FaqLayout = () => {
  return (
    <>
      <TopMargin />
      <Title>자주 묻는 질문</Title>
      <TopMargin />
      <AnimatePresence>
        {FaqData.map((data, id) => (
          <FaqCard {...data} key={data.id} />
        ))}
      </AnimatePresence>
      <TopMargin />
    </>
  );
};

export default FaqLayout;
