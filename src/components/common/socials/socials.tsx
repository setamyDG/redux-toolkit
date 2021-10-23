import React, { FC } from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { urls } from '@constants';
import { StyledSocials } from './socials.styled';

const Socials: FC = () => (
  <>
    <StyledSocials>
      <a href={urls.gh} rel='noopener noreferrer' target='_blank'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </StyledSocials>
    <StyledSocials>
      <a href={urls.linkedin} rel='noopener noreferrer' target='_blank'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </StyledSocials>
  </>
);

export default Socials;
