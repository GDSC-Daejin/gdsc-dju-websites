import styled from 'styled-components';

export const StyledImage = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  @media screen and (max-width: 500px) {
    width: 100px;
    height: 100px;
  }
`;
export const PositionCircle = styled.div<{ color?: string }>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 10px;
  background: ${(props) => props.color};
  @media screen and (max-width: 500px) {
    width: 18px;
    height: 18px;
  }
`;
export const StyledImageWrapper = styled.div`
  display: flex;
  width: 170px;
  height: 170px;
  align-items: center;
  position: relative;
  @media screen and (max-width: 500px) {
    width: 100px;
    height: 100px;
  }
`;
