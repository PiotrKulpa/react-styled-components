// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import styled from 'styled-components';
import { MenuWrapperProps, MenuItemWrapperProps, MobileMenuWrapperProps, MobileMenuPopupWrapperProps } from './types';

export const MenuWrapper = styled.ul<MenuWrapperProps>`
  display: none;
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

  @media (max-width: 768px) {
      display: none;
    }    
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

export const MobileLinksWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  background-color: ${({theme}) => theme.colors.black};
  opacity: 0.8;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    padding: 15px;
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
  }
`;

export const MobileMenuWrapper = styled.div<MobileMenuWrapperProps>`
  display: none; 
  @media (max-width: 768px) {
    display: block;
    padding: 15px;
    position: relative;
    z-index: 2;
    color: ${({isHome, theme}) => isHome ? theme.colors.white : theme.colors.black};
    background-color: ${({isHome, theme}) => isHome ? 'transparent' : theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const MobileMenuPopupClose = styled.div`
  width: 100%;
  position: absolute;
  text-align: right;
  right: 15px;
  color: ${({theme}) => theme.colors.white};
  z-index: 3;
`;

export const MobileMenuPopupWrapper = styled.div<MobileMenuPopupWrapperProps>`
  display: ${({isToggleOn}) => isToggleOn ? 'block' : 'none'};
`;