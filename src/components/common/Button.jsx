import styled, { css } from 'styled-components';
import theme from '../../theme/theme';

const propsAppliedCSS = ({
  type,
  size,
  isDisabled
}) => {
  const fontColor = theme.fontColor[isDisabled || type];
  const fontSize = theme.fontSize[size];
  const cursor = isDisabled ? 'default' : 'pointer';

  return css`
    width: fit-content;
    height: fit-content;
    padding: 1rem;
    color: ${fontColor};
    cursor: ${cursor};
    font-size: ${fontSize};
    font-family: 'Julius Sans One', sans-serif;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    background-color: transparent;
    :hover {
      cursor: pointer;
      background-color: ${theme.color.lightGray1};
    }
  `;
}

const StyledButton = styled.button`
  ${propsAppliedCSS}
`;

export default function Button({
  type = 'primary',
  size = 'medium',
  isDisabled = false,
  children = 'Button' 
}) {
  return (
    <StyledButton
      type={type}
      size={size}
      isDisabled={isDisabled}
    >
      {children}
    </StyledButton>
  );
}