import styled from 'styled-components';

export const ApplicantCardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ApplicantContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;
  box-sizing: border-box;
`;
export const ApplicantHeadWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  width: 95%;
`;
export const ApplicantCardSection = styled.section`
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
export const ApplicantSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;
