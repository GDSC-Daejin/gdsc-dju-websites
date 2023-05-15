import styled from 'styled-components';

export const InformationHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  box-sizing: border-box;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const EmailButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const AdminSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  min-width: 320px;
  flex: 1;
`;

export const ApplicantCardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ApplicantContainerInner = styled.div`
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
