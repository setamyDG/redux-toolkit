import React, { FC } from 'react';
import { StyledButton } from './button.styled';

type Props = {
  onClick: () => void;
  name: string;
};
const Button: FC<Props> = ({ onClick, name }) => <StyledButton onClick={onClick}>{name}</StyledButton>;

export default Button;
