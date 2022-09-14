import React from 'react';

import {
  Author,
  AuthorImage,
  AuthorWrapper,
  Date,
  HashTageSection,
  PostInformation,
} from '../styled';
import { AuthorProps } from '@type/postData';
import { HashTageDark } from '@src/components/atoms/HashTage';

import { hashTageSpreader } from '@utils/hashTageSpreader';
import { dateFilter } from '@utils/dateFilter';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  return (
    <>
      <PostInformation>
        <AuthorWrapper onClick={() => navigate(`/${nickname}?type=all&page=1`)}>
          <AuthorImage src={profileImageUrl} />
          <Author color={'grey500'} marginRight={2}>
            by
          </Author>
          <Author marginRight={10}>{nickname}</Author>
        </AuthorWrapper>
        <Date>{dateFilter(uploadDate)}</Date>
      </PostInformation>
      <HashTageSection>
        {hashTageSpreader(postHashTags).map((tage) => (
          <HashTageDark text={tage} key={tage} size={'L'} />
        ))}
      </HashTageSection>
    </>
  );
};

export default AuthorBox;
