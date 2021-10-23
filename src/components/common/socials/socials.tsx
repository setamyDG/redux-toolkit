import React, { FC } from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledSocials } from './socials.styled';

const Socials: FC = () => (
  <>
    <StyledSocials>
      <a href='123'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </StyledSocials>
    <StyledSocials>
      <a href='123'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </StyledSocials>
  </>
);

export default Socials;
