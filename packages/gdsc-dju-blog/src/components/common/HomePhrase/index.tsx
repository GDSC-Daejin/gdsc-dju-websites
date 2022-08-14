import { AnimatePresence, motion } from 'framer-motion';
import React, { memo, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  HomePhraseData,
  homePhraseData,
} from '../../../api/Mocks/homePhraseData';

const From = styled.div`
  font-size: ${({ theme }) => theme.fontSize.h7};
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.grey900};
`;
const Phrase = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h3};
  margin-bottom: 26px;
  color: ${({ theme }) => theme.colors.grey900};
  font-weight: 500;
  width: 600px;
`;
const By = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey900};
`;
const HomePhrase: React.FC = () => {
  const [phrase, setPhrase] = useState<HomePhraseData>(homePhraseData[0]);
  const phrases = phrase.phrase.split('\n');
  const setPhraseData = useCallback(() => {
    let index = 0;
    setInterval(() => {
      setPhrase(homePhraseData[index]);
      index++;
      if (index >= homePhraseData.length) index = 0;
    }, 5000);
  }, []);
  useEffect(() => {
    setPhraseData();
  }, []);
  return (
    <AnimatePresence>
      <motion.div
        key={phrase.phrase}
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        exit={{ opacity: 0, y: -30, position: 'absolute' }}
        transition={{ duration: 0.6 }}
      >
        {phrase.from && <From>From {phrase.from}</From>}
        <Phrase>
          {phrases.map((text, id) => (
            <React.Fragment key={id}>
              {text}
              <br />
            </React.Fragment>
          ))}
        </Phrase>
        {phrase.by && <By>By {phrase.by}</By>}
      </motion.div>
    </AnimatePresence>
  );
};

export default memo(HomePhrase);
