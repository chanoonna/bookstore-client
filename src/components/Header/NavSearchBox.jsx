import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { 
  StyledInputField,
  StyledNavSearchBox,
  InputFieldContainer,
  IconContainer
} from './styles';

const NavSearchBox = () => {
  return (
    <StyledNavSearchBox>
      <InputFieldContainer>
        <IconContainer>
          <FontAwesomeIcon icon={faSearch} size="1x" />
        </IconContainer>
        <StyledInputField placeholder="Search for books..." />
      </InputFieldContainer>
    </StyledNavSearchBox>
  );
}

export default NavSearchBox;
