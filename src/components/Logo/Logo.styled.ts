import { NavLink } from 'react-router';
import styled from 'styled-components';

export const LogoLink = styled(NavLink)`
  background-color: #22272e;
  border-radius: ${({ theme }) => theme.radii.m};
  width: 80px;
  height: 36px;

  @media (min-width: 1280px) {
    width: 100px;
    height: 49px;
  }
`;
