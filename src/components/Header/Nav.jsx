import NavSearchBox from './NavSearchBox';

import {
  StyledNav,
  StyledLogoContainer
} from './styles';

const Nav = () => {
  return (
    <StyledNav>
      <StyledLogoContainer
        src="images/logo.png"
        alt="EBS Logo"
      />
      <NavSearchBox />
    </StyledNav>    
  );
};

export default Nav;