import React, { FC } from 'react';
import { LayoutWrapperStyled } from './styles';
import { useMatch } from 'react-router-dom';
import { Props } from './types';

const LayoutWrapper: FC<Props> = ({ children }) => {
  const isHome = Boolean(useMatch('/'));
  return <LayoutWrapperStyled {...{ isHome }}>{children}</LayoutWrapperStyled>;
};

export default LayoutWrapper;
