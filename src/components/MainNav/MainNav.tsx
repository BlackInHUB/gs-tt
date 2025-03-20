import Button from '../UI/Button/Button';
import { AuthLinksWrapper, MainNavContainer, UserNavLink } from './MainNav.styled';

const MainNav = () => {
  return (
    <MainNavContainer>
      <AuthLinksWrapper>
        <UserNavLink to="authentication/register">
          <Button padding="16px" children="Registration" />
        </UserNavLink>
        <UserNavLink to="authentication/login">
          <Button padding="16px" children="Login" />
        </UserNavLink>
      </AuthLinksWrapper>
      <UserNavLink to="orders">
        <Button padding="12px" radii="s" children="Orders" fontWeight="bold" />
      </UserNavLink>
    </MainNavContainer>
  );
};

export default MainNav;
