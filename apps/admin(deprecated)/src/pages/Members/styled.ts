import styled from 'styled-components';

export const MemberListSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 10px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 1530px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1110px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MemberCardWrapper = styled.div`
  width: fit-content;
`;
