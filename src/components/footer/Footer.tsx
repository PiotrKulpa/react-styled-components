import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  FooterData,
  FooterLine,
  FooterCopyright,
  FooterSocialLink,
  FooterSocialList,
} from './styles';
import { FC } from 'react';
import { useMatch } from 'react-router-dom';

const Footer: FC = () => {
  const isHome = Boolean(useMatch('/'));

  return isHome ? (
    <></>
  ) : (
    <footer>
      <FooterLine />
      <div>
        <FooterData>
          <div>
            <p>
              <FontAwesomeIcon fontSize={30} icon={faLocationDot} />
            </p>
            <p>
              Opalowa 3/20
              <br />
              Lublin (Polska)
            </p>
          </div>
          <div>
            <p>
              <FontAwesomeIcon fontSize={30} icon={faPhone} />
            </p>
            <p>+507 531 805</p>
          </div>
          <div>
            <p>
              <FontAwesomeIcon fontSize={30} icon={faEnvelope} />
            </p>
            <p>info.kulpa@gmail.com</p>
          </div>
        </FooterData>
        <div className="row">
          <div>
            <FooterSocialList className="footer-social">
              <FooterSocialLink>
                <a href="#" aria-hidden="true">
                  <FontAwesomeIcon fontSize={21} icon={faFacebookF} />
                </a>
              </FooterSocialLink>
              <FooterSocialLink>
                <a href="#" aria-hidden="true">
                  <FontAwesomeIcon fontSize={21} icon={faLinkedin} />
                </a>
              </FooterSocialLink>
            </FooterSocialList>
            <FooterCopyright>
              Copyright © {new Date().getFullYear()} Piotr Kulpa - All rights
              reserved.
            </FooterCopyright>
          </div>
        </div>
      </div>
      <a href="#" aria-hidden="true" />
    </footer>
  );
};

export default Footer;
