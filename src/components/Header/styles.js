import styled from 'styled-components';
import theme from '../../theme/theme';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: rgba(245, 245, 245, .2);
  font-size: ${theme.fontSize.large};
  color: ${theme.color.darkGray2};
`;

export const StyledTitle = styled.h1`
  width: 100%;
  height: 100%;
  padding: 5rem 0;
  margin: 2rem 0;
  text-align: center;
  border-top: 3px solid ${theme.color.darkGray1};
  border-bottom: 3px solid ${theme.color.darkGray1};
`;

export const StyledNav = styled.nav`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;

export const StyledNavMenuBox = styled.aside`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const StyledLogoContainer = styled.img`
  height: 50px;
`;

export const StyledInputField = styled.div`
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 90%;
  height: 28px;
  padding: 0 10px;
  border-radius: 0.5rem;
  font-size: ${theme.fontSize.medium};
  border: none;
  outline: none;
  background-color: rgba(150, 150, 150, 0.1);
`;

export const IconContainer = styled.span`
  padding-right: ${theme.padding.small};
`;

export const StyledNavSearchBox = styled.div`
  width: 30%;
  min-width: 450px;
  padding: 0 2rem;
`;