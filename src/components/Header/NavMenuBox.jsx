import Button from '../common/Button';
import { StyledNavMenuBox } from './styles';

const menuItems = ['Home', 'Books', 'Search', 'Contacts'];

export default function NavMenuBox() {
  const handleClick = e => e.preventDefault();

  const renderMenuButtons = () => {
    return (
      menuItems.map(menu => (
      <Button
        key={menu}
        handleClick={handleClick}
        size='large'
      >
        {menu}
      </Button>
      ))
    );
  };

  return (
    <StyledNavMenuBox>
      {renderMenuButtons()}
    </StyledNavMenuBox>
  );
}