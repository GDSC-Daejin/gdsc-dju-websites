import React from 'react';

import {
  Author,
  AuthorImage,
  AuthorWrapper,
  Date,
  HashTageSection,
} from '../styled';
import { AuthorProps } from '@type/postData';
import { HashTageDark } from '@src/components/atoms/HashTage';
<<<<<<< HEAD
=======

>>>>>>> 5ec2cca35b4258a663fac6f7f27690ad215f7067
import { hashTageSpreader } from '@utils/hashTageSpreader';
import { dateFilter } from '@utils/dateFilter';

interface Props extends AuthorProps {
  uploadDate: string;
  postHashTags: string;
}
const AuthorBox: React.FC<Props> = ({
  profileImageUrl,
  nickname,
  uploadDate,
  postHashTags,
}) => {
  return (
    <>
      <AuthorWrapper>
        <AuthorImage src={profileImageUrl} />
        <Author color={'grey500'} marginRight={2}>
          by
        </Author>
        <Author marginRight={10}>{nickname}</Author>
        <Date>{dateFilter(uploadDate)}</Date>
      </AuthorWrapper>
      <HashTageSection>
        {hashTageSpreader(postHashTags).map((tage) => (
          <HashTageDark text={tage} key={tage} size={'L'} />
        ))}
      </HashTageSection>
    </>
  );
};

export default AuthorBox;
