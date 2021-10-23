import media from '@styles/media';
import styled from 'styled-components';

const StyledSubtitle = styled.span`
  font-size: 31px;
  font-weight: 900;
  letter-spacing: 0.033em;
  text-shadow: ${({ theme }) => `-0.043em 0px 6px ${theme.colors.red}, 0.043em 0 6px ${theme.colors.blue}`};
  border-bottom: 4px solid black;
  ${media.tablet} {
    font-size: 24px;
  }
`;

export { StyledSubtitle };
