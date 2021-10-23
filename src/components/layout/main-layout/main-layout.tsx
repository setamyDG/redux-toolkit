import React, { FC } from 'react';
import { Footer } from '../footer';
import { Right, StyledMain, Left } from './main-layout.styled';

const MainLayout: FC = ({ children }) => (
  <>
    <Left />
    <Right>
      <StyledMain>{children}</StyledMain>
    </Right>
    <Footer />
  </>
);

export default MainLayout;
