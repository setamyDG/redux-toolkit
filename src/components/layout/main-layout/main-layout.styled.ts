import styled from 'styled-components/macro';
import { media, zIndex } from '@styles';
import bg from '@assets/images/bg.jpg';

const StyledMain = styled.main`
  height: auto;
  padding: 30px 30px 0px 30px;
  ${media.phone} {
    padding: 0px;
  }
`;

const Left = styled.div`
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: ${zIndex.level1};
  top: 0;
  overflow-x: hidden;
  left: 0;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-position-y: 0px;
  ${media.tablet} {
    width: 100%;
    height: 50%;
    background-size: cover;
    background-position-y: -80px;
  }
`;

const Right = styled.div`
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: ${zIndex.level1};
  top: 0;
  overflow-x: hidden;
  right: 0;
  ${media.tablet} {
    width: 100%;
    height: 50%;
    top: 50%;
  }
`;

export { StyledMain, Right, Left };
