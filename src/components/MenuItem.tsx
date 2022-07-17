import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import MenuLogo from './MenuLogo';
import { MenuItemsTypes } from '../constants/types';
import { useMatch } from 'react-router-dom';

const MenuItem: FC<MenuItemsTypes> = ({ name, url, icon }) => {
  const isHome = Boolean(useMatch('/'));

  return icon ? <MenuLogo /> : <Link to={url}>{name}</Link>;
};

export default MenuItem;
