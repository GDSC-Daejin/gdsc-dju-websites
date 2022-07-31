import { AnimatePresence, LayoutGroup } from 'framer-motion';
import React, { useState } from 'react';
import { ContributorType } from '../../types/contributor';
import { contributorAnimate } from '../animation';
import {
  ContributeList,
  ContributorCardWrapper,
  ContributorImage,
  ContributorName,
  ContributorRole,
  ContributorWrapper,
} from './styled';

const ContributorCard: React.FC<ContributorType> = ({
  name,
  role,
  profileImage,
  contributes,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <AnimatePresence>
      <ContributorCardWrapper
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover && (
          <ContributorWrapper
            variants={contributorAnimate}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
          >
            {contributes.map((data, id) => (
              <ContributeList key={id}>{data}</ContributeList>
            ))}
          </ContributorWrapper>
        )}
        <ContributorImage
          src={profileImage}
          variants={contributorAnimate}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
        />
        <ContributorName
          variants={contributorAnimate}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
        >
          {name}
        </ContributorName>
        <ContributorRole
          variants={contributorAnimate}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
        >
          {role}
        </ContributorRole>
      </ContributorCardWrapper>
    </AnimatePresence>
  );
};

export default ContributorCard;
