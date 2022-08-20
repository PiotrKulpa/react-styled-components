// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import styled from 'styled-components';
import { MenuWrapperProps, MenuItemWrapperProps } from './types';

export const MenuWrapper = styled.ul<MenuWrapperProps>`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  margin: 0;
  padding: 0;
  height: 70px;
  z-index: 1;
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;
  background-color: ${({isHome, theme}) => isHome ? 'transparent' : theme.colors.white};
  border-top: ${({isScrolled, theme}) => isScrolled ? `solid ${theme.colors.grey} 1px` : 'solid 0'};
  border-bottom: ${({isScrolled, theme}) => isScrolled ? `solid ${theme.colors.grey} 1px` : 'solid 0'};
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

    &:after {
        padding-top: 5px;
        content: " ";
        display: block;
        position: absolute;
        text-align: center;
        margin: 0;
        height: 1px;
        width: 100%;
        transform: scaleX(0);
        border-bottom: 1px solid;
        transition: transform 0.5s;
      }

    &:hover {
      &:after {
        padding-top: 5px;
        content: " ";
        display: block;
        position: absolute;
        text-align: center;
        margin: 0;
        height: 1px;
        width: 100%;
        border-bottom: 1px solid;
        transform: scaleX(1);
        transition: transform 0.5s;
      }
    }

   
  }
`;

export const MenuLogoIconWrapper = styled.div`
  border: solid 1px;
  border-radius: 50%;
  padding: 15px;

  a {
    &:after {
      display: none;
    }

    &:hover {
      &:after {
        display: none;
    }
    }
  }
`;