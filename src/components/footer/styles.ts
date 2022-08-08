import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0.5;
  }

  to {
    opacity: 1;
  }
`;

export const FooterLine = styled.hr`
  border-color: ${({theme}) => theme.colors.black};
  opacity: 0.2;
  margin: 50px 0px;
  border-top: 1px solid;
  border-top-color: ${({theme}) => theme.colors.grey};
  height: 0;
  box-sizing: content-box;
`;

export const FooterData = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  color: ${({theme}) => theme.colors.black};
  font-family: 'Raleway', sans-serif;
  font-weight: 200;
`;

export const FooterCopyright = styled.p`
  text-align: center;
`;

export const FooterSocialList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 40px 0;
`;

export const FooterSocialLink = styled.li`
  text-decoration: none;
  
  & a {
    color: ${({theme}) => theme.colors.black};
    margin: 20px 0;
    padding: 15px;
    opacity: 0.5;
  }

  & a:hover {
    background-color: red;
    animation: ${fadeIn} 1s linear forwards;
  }
`;