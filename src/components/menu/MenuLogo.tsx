import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { MenuLogoIconWrapper } from './styles';

const MenuLogo: FC = () => {
  return (
    <MenuLogoIconWrapper>
      <Link to={'/'}>
        <FontAwesomeIcon fontSize={21} icon={faHouse} />
      </Link>
    </MenuLogoIconWrapper>
  );
};

export default MenuLogo;
