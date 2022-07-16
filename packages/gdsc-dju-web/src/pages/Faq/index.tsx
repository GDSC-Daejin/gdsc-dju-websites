import React, { useState } from 'react';
import { Title } from '../../components/common/Title/title';
import {
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../styles/layouts';

import {
  AnswerText,
  AnswerWrapper,
  QuestionBr,
  QuestionInner,
  QuestionMark,
  QuestionWrapper,
} from './styled';
import { FaqData } from '../../apis/pageData/faq';
import { AnimatePresence, motion } from 'framer-motion';
import Banner from '../../components/common/Banner';
import ReactHelmet from '../../components/common/ReactHelmet';

const Faq = () => {
  return (
    <>
      <ReactHelmet title={'자주 묻는 질문'} description={'자주 묻는 질문'} />
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
      <QuestionWrapper
        animate={isOpen ? 'hovered' : 'unHover'}
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <QuestionInner>
          <QuestionMark />
          {question}
        </QuestionInner>
      </QuestionWrapper>
      {isOpen && (
        <AnswerWrapper
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          initial={{ opacity: 0 }}
        >
          {answer.split('\n').map((text, id) => (
            <AnswerText key={id}>{text}</AnswerText>
          ))}
        </AnswerWrapper>
      )}
      <QuestionBr />
    </motion.div>
  );
};
const MemoFaqElement = React.memo(FaqElement);

export default Faq;
