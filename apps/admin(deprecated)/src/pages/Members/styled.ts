import styled from 'styled-components';

export const MemberListSection = styled.section`
  display: grid;
  padding: 30px;
  /* grid-template-columns: repeat(3, 1fr); */
  row-gap: 10px;

  width: 100%;
  box-sizing: border-box;
  @media (min-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1620px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 2000px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const MemberCardWrapper = styled.div`
  width: fit-content;
`;
export const RoleSection = styled.div`
  grid-column: 1 / -1;

  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey900};
`;
