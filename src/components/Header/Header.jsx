import Nav from './Nav';

import {
  StyledHeader,
  StyledTitle
} from './styles';

const Header = () => {
  return (
    <StyledHeader>
      <Nav />
      <StyledTitle>Educational Book Supply</StyledTitle>
    </StyledHeader>
  );
}

export default Header;