import { FC } from 'react';
import { Link } from 'react-router-dom';
import MenuLogo from './MenuLogo';
import { MenuItemsTypes } from '../../constants/types';

const MenuItem: FC<MenuItemsTypes> = ({ name, url, icon }) => {
  return icon ? <MenuLogo /> : <Link to={url}>{name}</Link>;
};

export default MenuItem;
