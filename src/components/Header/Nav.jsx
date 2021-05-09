import NavSearchBox from './NavSearchBox';
import NavMenuBox from './NavMenuBox';

import {
  StyledNav
} from './styles';

const Nav = () => {
  return (
    <StyledNav>
      <NavMenuBox />
      <NavSearchBox />
    </StyledNav>    
  );
};

export default Nav;