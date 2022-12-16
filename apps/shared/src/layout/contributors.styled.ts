import styled from 'styled-components';

export const ContributorsLayoutWrapper = styled.div`
  position: static;
  margin: 70px 0;
`;

export const ContributorsSection = styled.section`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 60px;
`;
export const ContributorCardWrapper = styled.div`
  width: 33.33%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1050px) {
    width: 50%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
