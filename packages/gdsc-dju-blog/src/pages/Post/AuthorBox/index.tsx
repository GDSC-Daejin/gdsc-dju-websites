import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthorProps } from '@type/postData';
import { dateFilter } from '@utils/dateFilter';

import {
  Author,
  AuthorImage,
  AuthorWrapper,
  Date,
  PostInformation,
} from '../styled';

interface Props extends AuthorProps {
  uploadDate: string;
  postHashTags: string[];
}
const AuthorBox = ({
  profileImageUrl,
  nickname,
  uploadDate,
  postHashTags,
}: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <PostInformation>
        <AuthorWrapper
          onClick={() => navigate(`/@${nickname}?type=all&page=1`)}
        >
          <AuthorImage src={profileImageUrl} />
          <Author color={'grey500'} marginRight={2}>
            by
          </Author>
          <Author marginRight={10}>{nickname}</Author>
        </AuthorWrapper>
        <Date>{dateFilter(uploadDate)}</Date>
      </PostInformation>
      {/*<HashTageSection>*/}
      {/*  {postHashTags.map((tage) => (*/}
      {/*    <HashTageDark text={tage} key={tage} size={'L'} />*/}
      {/*  ))}*/}
      {/*</HashTageSection>*/}
    </>
  );
};

export default AuthorBox;
