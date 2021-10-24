import React, { FC } from 'react';
import { Container, Section, Socials, Subtitle, Title } from '@components/common';
import { useAppSelector } from '@redux/hooks';
import { useDispatch } from 'react-redux';
import { decrementValue, incrementByAmountValue, incrementValue, setToDefault } from '@redux/counter/actions';
import styled from 'styled-components/macro';
import media from '@styles/media';
import { Button } from '@components/common/button';

const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  ${media.tablet} {
    flex-direction: column;
    align-items: center;
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
  text-shadow: ${({ theme }) => `-0.043em 0px 6px ${theme.colors.red}, 0.043em 0 6px ${theme.colors.blue}`};
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
        <Socials />
        <Title>Redux Toolkit with React Typescript.</Title>
        <Subtitle>Test it now.</Subtitle>
        <ButtonsWrapper>
          <Column>
            <Button name='Increment' onClick={handleIncrement} />
            <Button name='Decrement' onClick={handleDecrement}>
              Decrement
            </Button>
            <Button name='Increment by 20' onClick={handleIncrementBy}>
              Increment by 20
            </Button>
            <Button name='set to 0' onClick={handleSetToZero} />
          </Column>
          <StyledValue>{value}</StyledValue>
        </ButtonsWrapper>
      </Container>
    </Section>
  );
};

export default Home;
