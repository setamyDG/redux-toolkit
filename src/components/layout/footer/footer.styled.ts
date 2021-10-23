import media from '@styles/media';
import zIndex from '@styles/zIndex';
import styled from 'styled-components/macro';

const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  z-index: ${zIndex.level9};
  background: ${({ theme }) => theme.colors.white};
  padding: 20px 150px;
  ${media.tablet} {
    padding: 0px 30px;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  justify-content: space-between;
`;

const Name = styled.p`
  font-size: 0.825rem;
  font-weight: 700;
  ${media.tablet} {
    font-size: 0.625rem;
  }
`;

export { StyledFooter, Name, FooterContainer };
