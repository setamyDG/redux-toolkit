import media from '@styles/media';
import styled from 'styled-components';

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
  text-shadow: ${({ theme }) => `-0.043em 0px 6px ${theme.colors.red}, 0.043em 0 6px ${theme.colors.blue}`};
  ${media.tablet} {
    font-size: 36px;
  }
`;

export { StyledTitle };
