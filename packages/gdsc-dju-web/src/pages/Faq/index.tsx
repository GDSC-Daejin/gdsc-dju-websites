import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Banner from '@common/Banner';
import { FaqData } from '@src/contents/faq';
import * as FaqStyle from './styled';
import { Title } from '@common/Title/title';
import { ContainerInner, TopMargin } from '@styles/layouts';
import { LayoutContainer } from '@styles/layouts';

const Faq = () => {
  return (
    <>
      <Banner color={'green'} />
      <LayoutContainer>
        <ContainerInner>
          <TopMargin />
          <Title>자주 묻는 질문</Title>
          <TopMargin />
          <AnimatePresence>
            {FaqData.map((data, id) => (
              <MemoFaqElement {...data} key={id} />
            ))}
          </AnimatePresence>
          <TopMargin />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
interface faqProps {
  id: number;
  question: string;
  answer: string;
}

const FaqElement: React.FC<faqProps> = ({ question, answer }) => {
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
const MemoFaqElement = React.memo(FaqElement);

export default Faq;
