import { url } from 'inspector';
import styled from 'styled-components';

interface MenuWrapperProps {
  readonly isHome: boolean;
}

interface MenuItemWrapperProps {
  readonly isHome: boolean;
  readonly key: number;
}

interface SliderWrapperProps {
  readonly imgUrl: string;
}

export const MenuWrapper = styled.ul<MenuWrapperProps>`
  margin: 20px 0 0;
  position: sticky;
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;
  background-color: ${({isHome, theme}) => isHome ? 'transparent' : theme.colors.white};
`;

export const MenuItemWrapper = styled.li<MenuItemWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 0 30px;
  position: relative;
  background: none;
  border: 0px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8em;
  font-weight: 700;
  color: ${({isHome, theme}) => isHome ? theme.colors.white : theme.colors.black};

  a {
    color: ${({isHome, theme}) => isHome ? theme.colors.white : theme.colors.black};
    text-decoration: none;
  }
`;

export const SliderPattern = styled.div`
position: absolute;
  height: 100vh;
  width: 100vw;
  background-image:  url('pattern.png');
`;

export const SliderWrapper = styled.div<SliderWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image:  url(${props => props.imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.white};

  h2 {
    font-weight: 700;
    font-size: 5em;
    letter-spacing: -0.05em;
    margin: 0px;
    text-transform: uppercase;
    line-height: 1.05em;
    color: ${({theme}) => theme.colors.white};
  }
`;