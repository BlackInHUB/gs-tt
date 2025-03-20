import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const NavBarLinksWrapper = styled.div`
  width: 100%;
  padding: 4px;
  display: flex;
  background-color: #51555b;
  border-radius: ${({ theme }) => theme.radii.m};
`;

export const NavBarLink = styled(NavLink)<{ $isActive: boolean }>`
  text-align: center;
  border-radius: ${({ theme }) => theme.radii.s};
  background-color: ${props => (props.$isActive ? '#FFFFFF' : 'transparent')};
  width: 50%;
  padding: 10px;
  color: ${props => (props.$isActive ? '#000000' : 'inherit')};
  transition: color 150ms ease-in-out;
`;
