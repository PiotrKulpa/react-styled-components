import { FC, useContext } from 'react';
import { menuItems } from '../../constants';
import MenuItem from './MenuItem';
import { MenuWrapper, MenuItemWrapper } from './styles';
import { useMatch } from 'react-router-dom';
import { MainContext } from '../../context';

const Menu: FC = () => {
  const isHome = Boolean(useMatch('/'));
  const { isScrolled } = useContext(MainContext);

  console.log({ isScrolled });

  return (
    <MenuWrapper {...{ isHome, isScrolled }}>
      {menuItems.map(({ name, url, icon }, index) => (
        <MenuItemWrapper key={index} {...{ isHome }}>
          <MenuItem {...{ name, url, icon }} />
        </MenuItemWrapper>
      ))}
    </MenuWrapper>
  );
};

export default Menu;
