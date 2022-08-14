import styled from 'styled-components';

export const FormImage = styled.img`
  height: 180px;
  width: 180px;
  border-radius: 50%;
  border: 0px solid;
`;
export const ImageText = styled.div`
  font-size: ${(props) => props.theme.fontSize.body1};
  color: #fff;
  margin-bottom: 10px;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;
export const FormImageWrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
  width: 180px;
  cursor: pointer;
`;
