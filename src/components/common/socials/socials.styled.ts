import media from '@styles/media';
import styled from 'styled-components';

const StyledSocials = styled.div`
  display: inline-block;
  margin: 30px;
  cursor: pointer;
  a {
    display: block;
    background: rgba(0, 0, 0, 1);
    padding: 20px;
    position: relative;
    transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(0, 0);
    box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease-in-out;

    &::before {
      display: block;
      content: '';
      position: absolute;
      width: 20px;
      height: 100%;
      left: -20px;
      top: 10px;
      background: rgba(0, 0, 0, 0.7);
      transform: rotate(0deg) skewY(-45deg);
    }

    &::after {
      display: block;
      content: '';
      position: absolute;
      bottom: -20px;
      left: -10px;
      height: 20px;
      width: 100%;
      transform: rotate(0deg) skewX(-45deg);
      background: rgba(0, 0, 0, 0.7);
      transform: rotate(45deg) (-45deg);
    }

    &:hover {
      transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(20px, -20px);
      box-shadow: -50px 50px 30px rgba(0, 0, 0, 0.5);
    }
  }
  ${media.tablet} {
    margin: 0px 60px 0px 0px;
  }
`;

export { StyledSocials };
