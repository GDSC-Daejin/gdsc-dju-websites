import React from 'react';
import { HashTageDark } from '../../../components/common/HashTage';
import { AuthorProps } from '../../../types/postData';
import { dateFilter } from '../../../Utils/dateFilter';
import { hashTageSpreader } from '../../../Utils/hashTageSpreader';
import {
  Author,
  AuthorImage,
  AuthorWrapper,
  Date,
  HashTageSection,
} from '../styled';

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
