import React, { FC } from 'react';
import { menuItems } from '../constants';
import MenuItem from './MenuItem';
import { MenuWrapper, MenuItemWrapper } from './styles';
import { useMatch } from 'react-router-dom';

const Menu: FC = () => {
  const isHome = Boolean(useMatch('/'));

  return (
    <MenuWrapper {...{ isHome }}>
      {menuItems.map(({ name, url, icon }, index) => (
        <MenuItemWrapper key={index} {...{ isHome }}>
          <MenuItem {...{ name, url, icon }} />
        </MenuItemWrapper>
      ))}
    </MenuWrapper>
  );
};

export default Menu;
