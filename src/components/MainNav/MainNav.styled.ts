import { NavLink } from 'react-router';
import styled from 'styled-components';

export const MainNavContainer = styled.nav`
  width: 100%;
  max-width: 450px;
`;

export const AuthLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const UserNavLink = styled(NavLink)``;
