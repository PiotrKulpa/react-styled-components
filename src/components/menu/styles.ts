import styled from 'styled-components';
import { MenuWrapperProps, MenuItemWrapperProps } from './types';

export const MenuWrapper = styled.ul<MenuWrapperProps>`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  margin: 10px 0;
  height: 50px;
  z-index: 1;
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