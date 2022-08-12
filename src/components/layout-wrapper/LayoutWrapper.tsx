import { FC, useEffect, useState } from 'react';
import { LayoutWrapperStyled } from './styles';
import { useMatch } from 'react-router-dom';
import { Props } from './types';
import { MainContext } from '../../context';

const LayoutWrapper: FC<Props> = ({ children }) => {
  const isHome = Boolean(useMatch('/'));
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset !== 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);

    return () => window.removeEventListener('scroll', handleScroll, false);
  }, []);

  return (
    <MainContext.Provider value={{ isScrolled }}>
      <LayoutWrapperStyled {...{ isHome }}>{children}</LayoutWrapperStyled>
    </MainContext.Provider>
  );
};

export default LayoutWrapper;
