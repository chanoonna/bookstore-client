import styled from 'styled-components';
import theme from '../../theme/theme';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: rgba(245, 245, 245, .2);
  padding: 1rem 0;
  position: fixed;
  top: 0;
  overflow: hidden;
  z-index: 2;
`;

export const StyledNav = styled.nav`
  width: 50%;
  min-width: 1024px;
  display: flex;
`;

export const StyledLogoContainer = styled.img`
  height: 50px;
`;

export const StyledInputField = styled.div`
  width: 100%;
  height: 40px;
  min-width: 400px;
  border-bottom: 2px solid ${theme.color.darkGray};
  padding: ${theme.padding.small};
`;

export const StyledInput = styled.input`
  width: 90%;
  height: 28px;
  font-size: ${theme.fontSize.medium};
  border: none;
  outline: none;
`;

export const IconContainer = styled.span`
  padding-right: ${theme.padding.small};
`;

export const StyledNavSearchBox = styled.div`
  width: 30%;
  min-width: 450px;
  padding: 0 2rem;
`;