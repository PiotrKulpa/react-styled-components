import { FC, useState } from 'react';
import { MobileMenuWrapper } from './styles';
import { useMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars } from '@fortawesome/free-solid-svg-icons';
import MobileMenuPopup from './MobileMenuPopup';

const MobileMenu: FC = () => {
  const isHome = Boolean(useMatch('/'));
  const [isToggleOn, setIsToggleOn] = useState<boolean>(false);

  console.log({ isToggleOn });

  return (
    <>
      <MobileMenuWrapper {...{ isHome }}>
        <FontAwesomeIcon fontSize={30} icon={faHouse} />
        <FontAwesomeIcon
          fontSize={30}
          icon={faBars}
          onClick={() => setIsToggleOn(!isToggleOn)}
        />
      </MobileMenuWrapper>
      <MobileMenuPopup {...{ setIsToggleOn, isToggleOn }} />
    </>
  );
};

export default MobileMenu;
