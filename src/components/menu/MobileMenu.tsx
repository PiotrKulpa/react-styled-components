import react, { FC, useContext } from 'react';
import { menuItems } from '../../constants';
import MenuItem from './MenuItem';
import { MenuWrapper, MenuItemWrapper, MobileLinksWrapper } from './styles';
import { useMatch } from 'react-router-dom';
import { MainContext } from '../../context';
import { Link } from 'react-router-dom';

const MobileMenu: FC = () => {
  const isHome = Boolean(useMatch('/'));
  const { isScrolled } = useContext(MainContext);

  console.log({ isScrolled });

  // TODO: dodaj styl do wrappera position absolute, dodaj menu mobilne

  return (
    <MobileLinksWrapper>
      {menuItems.map(({ name, url, icon }, index) => (
        <Link to={url}>{name}</Link>
      ))}
    </MobileLinksWrapper>
  );
};

export default MobileMenu;
