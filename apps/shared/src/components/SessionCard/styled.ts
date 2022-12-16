import styled from 'styled-components';

export const SessionCardWrapper = styled.div`
  padding: 30px;
  width: 300px;
  height: 260px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.grey50};
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    height: 240px;
  }
`;

export const SessionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.h6};
  color: ${({ theme }) => theme.colors.grey900};
  word-break: keep-all;
`;
export const SessionTime = styled.p`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey500};
`;
export const SpeakerWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;
export const SpeakerImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;
export const SpeakerName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey900};
`;
export const SpeakerRole = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey600};
  margin-top: 4px;
`;
export const SpeakerInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
