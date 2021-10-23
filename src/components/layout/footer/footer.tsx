import React, { FC } from 'react';
import { StyledFooter, Name, FooterContainer } from './footer.styled';

const Footer: FC = () => (
  <StyledFooter>
    <FooterContainer>
      <Name>#Redux</Name>
      <Name>#React</Name>
      <Name>#Frontend</Name>
      <Name>#Typescript</Name>
      <Name>#Frontend</Name>
      <Name>#Redux Toolkit</Name>
      <Name>#Hooks</Name>
    </FooterContainer>
  </StyledFooter>
);

export default Footer;
