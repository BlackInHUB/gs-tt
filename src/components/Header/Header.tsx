import UserBar from '../UserBar/UserBar';
import { HeaderContainer } from './Header.styled';

type Props = {
  isLoggedIn: boolean;
};

const Header = ({ isLoggedIn }: Props) => {
  return (
    <HeaderContainer>
      <UserBar isLoggedIn={isLoggedIn} />
    </HeaderContainer>
  );
};

export default Header;
