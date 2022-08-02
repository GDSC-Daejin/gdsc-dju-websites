import styled from 'styled-components';

export const SignInWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.background};
`;
export const SignInLeftSection = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SignInSolarSystemWrapper = styled.div`
  position: relative;

  top: -30%;
  left: -30%;
`;
export const AuthBoxWrapper = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const AuthBoxInner = styled.div`
  padding: 40px 50px;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 12px rgba(25, 31, 40, 0.08);
`;
export const GDSCLogoImage = styled.img`
  height: 20px;
  margin-right: 15px;
`;
export const AuthElementWrapper = styled.div<{
  direction?: string;
  align?: string;
}>`
  width: 400px;
  display: flex;
  align-items: ${({ align }) => align};
  margin-bottom: 15px;
  flex-direction: ${({ direction }) => direction};
`;
export const ButtonWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
`;
export const AuthErrorText = styled.p`
  height: 20px;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.tossRed};
`;
export const AuthButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`;
export const AuthSignButton = styled.button`
  display: flex;
  align-items: center;
  border: 0 solid;
  border-radius: 50px;
  padding: 13px 40px;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.body1};
  font-weight: bold;
  background: ${({ theme }) => theme.colors.tossBlueActive};
  &:hover {
    cursor: pointer;
  }
`;
export const AuthTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.grey800};
`;
export const AuthSubTitle = styled.h4`
  font-size: 1.6rem;
  word-break: keep-all;
  justify-content: flex-start;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.grey600};
  margin-right: 10px;
  &:nth-child(n + 1):nth-child(-n + 2) {
    margin-bottom: 10px;
  }
`;
export const AuthInput = styled.input`
  height: 50px;
  border: 0 solid transparent;
  border-radius: 10px;
  padding: 0 20px;
  font-size: ${({ theme }) => theme.fontSize.body2};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.grey900};
  ::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
  }
`;

export const AuthLogoText = styled.div<any>`
  font-size: ${({ theme }) => theme.fontSize.h6};
  font-weight: ${({ border }) => border};
  color: ${({ theme }) => theme.colors.grey900};
  margin-right: 5px;
`;
export const AuthOtherText = styled.text`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey400};
  margin: 0 10px;
`;
export const AuthLine = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.grey400};
  margin: 1em 0;
  padding: 0;
  width: 100%;
`;
export const OAuthButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  background: ${({ theme }) => theme.colors.background};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;
export const OAuthText = styled.div<{ weight?: string }>`
  font-size: ${({ theme }) => theme.fontSize.body1};
  font-weight: ${({ weight }) => weight};
  color: ${({ theme }) => theme.colors.grey800};
`;
export const OAuthImage = styled.img`
  height: 25px;
  margin-right: 7px;
  color: ${({ theme }) => theme.colors.grey900};
`;
