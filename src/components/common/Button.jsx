import styled, { css } from 'styled-components';
import theme from '../../theme/theme';

const propsAppliedCSS = ({
  type,
  size,
  isDisabled
}) => {
  const fontColor = theme.fontColor[isDisabled || type];
  const fontSize = theme.fontSize[size];
  const width = theme.width[size];
  const height = theme.heigh[size];
  const cursor = isDisabled ? 'default' : 'pointer';
  const padding = theme.padding[size];

  return css`
    width: ${width};
    height: ${height};
    padding: ${padding};
    color: ${fontColor};
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