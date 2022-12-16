import React, { memo, useState } from 'react';

import { motion } from 'framer-motion';

import * as FaqStyle from '@pages/Faq/styled';

interface faqProps {
  id: number;
  question: string;
  answer: string;
}

const FaqCard: React.FC<faqProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div>
      <FaqStyle.QuestionWrapper
        animate={isOpen ? 'hovered' : 'unHover'}
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <FaqStyle.QuestionInner>
          <FaqStyle.QuestionMark />
          {question}
        </FaqStyle.QuestionInner>
      </FaqStyle.QuestionWrapper>
      {isOpen && (
        <FaqStyle.AnswerWrapper
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          initial={{ opacity: 0 }}
        >
          {answer.split('\n').map((text, id) => (
            <FaqStyle.AnswerText key={id}>{text}</FaqStyle.AnswerText>
          ))}
        </FaqStyle.AnswerWrapper>
      )}
      <FaqStyle.QuestionBr />
    </motion.div>
  );
};

export default memo(FaqCard);
