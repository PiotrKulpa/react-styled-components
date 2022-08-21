import react, { FC, useContext } from 'react';
import { menuItems } from '../../constants';
import {
  MobileLinksWrapper,
  MobileMenuPopupClose,
  MobileMenuPopupWrapper,
} from './styles';
import { useMatch } from 'react-router-dom';
import { MainContext } from '../../context';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { MobileMenuPopupProps } from './types';

const MobileMenuPopup: FC<MobileMenuPopupProps> = ({
  setIsToggleOn,
  isToggleOn,
}) => {
  const isHome = Boolean(useMatch('/'));
  const { isScrolled } = useContext(MainContext);

  return (
    <MobileMenuPopupWrapper {...{ isToggleOn }}>
      <MobileLinksWrapper onClick={() => setIsToggleOn(!isToggleOn)}>
        {menuItems.map(({ name, url }) => (
          <Link to={url}>{name}</Link>
        ))}
      </MobileLinksWrapper>
      <MobileMenuPopupClose onClick={() => setIsToggleOn(!isToggleOn)}>
        <FontAwesomeIcon fontSize={30} icon={faClose} />
      </MobileMenuPopupClose>
    </MobileMenuPopupWrapper>
  );
};

export default MobileMenuPopup;
