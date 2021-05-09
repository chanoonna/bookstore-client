import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { 
  StyledInputField,
  StyledNavSearchBox,
  StyledInput,
  IconContainer
} from './styles';

const NavSearchBox = () => {
  return (
    <StyledNavSearchBox>
      <StyledInputField>
        <IconContainer>
          <FontAwesomeIcon icon={faSearch} size="1x" />
        </IconContainer>
        <StyledInput placeholder="Search for books..." />
      </StyledInputField>
    </StyledNavSearchBox>
  );
}

export default NavSearchBox;
