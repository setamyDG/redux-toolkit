import React, { FC } from 'react';
import { Container, Section } from '@components/common';
import { useAppSelector } from '@redux/hooks';
import { useDispatch } from 'react-redux';
import { decrementValue, incrementByAmountValue, incrementValue, setToDefault } from '@redux/counter/actions';
import styled, { keyframes } from 'styled-components/macro';
import media from '@styles/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  ${media.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledTitle = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 52px;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 20px;
  margin-top: 50px;
  color: rgb(30, 30, 30);
  text-transform: uppercase;
  letter-spacing: 0.033em;
  text-shadow: -0.043em 0 6px rgba(255, 0, 0, 0.67), 0.043em 0 6px rgba(0, 255, 255, 0.67);
  ${media.tablet} {
    font-size: 36px;
  }
`;

const Subtitle = styled.span`
  font-size: 31px;
  font-weight: 900;
  letter-spacing: 0.033em;
  text-shadow: -0.043em 0 6px rgba(255, 0, 0, 0.67), 0.043em 0 6px rgba(0, 255, 255, 0.67);
  border-bottom: 4px solid black;
  ${media.tablet} {
    font-size: 24px;
  }
`;

const StyledValue = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 260px;
  font-weight: 900;
  line-height: normal;
  color: rgb(30, 30, 30);
  text-transform: uppercase;
  letter-spacing: 0.033em;
  text-shadow: -0.043em 0 6px rgba(255, 0, 0, 0.67), 0.043em 0 6px rgba(0, 255, 255, 0.67);
  ${media.tablet} {
    font-size: 200px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 130px;
  ${media.tablet} {
    flex-direction: row;
    margin-right: 0px;
    justify-content: space-between;
  }
`;

const glitch = keyframes`
  0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }
  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }
  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }
  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }
  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }
  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }
  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0px);
  }
  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
`;

export const StyledSocials = styled.div`
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

export const StyledButton = styled.button`
  width: 250px;
  margin-top: 25px;
  height: 55px;
  font-size: 16px;
  background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
  border: 0;
  color: #fff;
  letter-spacing: 3px;
  box-shadow: 6px 0px 0px #00e6f6;
  outline: transparent;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  :hover {
    cursor: pointer;
  }
  ::after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);

    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 3%, #00e6f6 3%, #00e6f6 5%, #ff013c 5%);
    text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
    clip-path: var(--slice-0);
  }

  :hover::after {
    animation: 1s ${glitch};
    animation-timing-function: steps(2, end);
  }
  ${media.tablet} {
    width: 180px;
    height: 45px;
    font-size: 10px;
    margin: 15px;
  }
`;

const Home: FC = () => {
  const { value } = useAppSelector(({ counter }) => counter);
  const dispatch = useDispatch();

  const handleIncrement = (): void => {
    dispatch(incrementValue());
  };

  const handleDecrement = (): void => {
    dispatch(decrementValue());
  };

  const handleIncrementBy = (): void => {
    dispatch(incrementByAmountValue(20));
  };

  const handleSetToZero = (): void => {
    dispatch(setToDefault());
  };

  return (
    <Section>
      <Container>
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
        <StyledTitle>Redux Toolkit with React Typescript</StyledTitle>
        <Subtitle>Test it now.</Subtitle>
        <ButtonsWrapper>
          <Column>
            <StyledButton onClick={handleIncrement}>Increment</StyledButton>
            <StyledButton onClick={handleDecrement}>Decrement</StyledButton>
            <StyledButton onClick={handleIncrementBy}>Increment by 20</StyledButton>
            <StyledButton onClick={handleSetToZero}>set to 0</StyledButton>
          </Column>
          <StyledValue>{value}</StyledValue>
        </ButtonsWrapper>
      </Container>
    </Section>
  );
};

export default Home;
