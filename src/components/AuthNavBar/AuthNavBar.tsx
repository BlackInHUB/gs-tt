import Button from '../UI/Button/Button';
import { NavBarWrapper, NavBarLinksWrapper, NavBarLink } from './AuthNavBar.styled';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthNavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleCloseClick = () => {
    navigate('/');
  };

  return (
    <NavBarWrapper>
      <NavBarLinksWrapper>
        <NavBarLink $isActive={pathname.includes('login')} to="login">
          Login
        </NavBarLink>
        <NavBarLink $isActive={pathname.includes('register')} to="register">
          Registration
        </NavBarLink>
      </NavBarLinksWrapper>

      <Button variant="icon" Icon={CloseIcon} handleClick={handleCloseClick} />
    </NavBarWrapper>
  );
};

export default AuthNavBar;
