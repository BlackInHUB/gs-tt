import styled from 'styled-components';

export const LayoutContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 99;
  transition: all 150ms linear;
`;

export const AuthOutletContainer = styled.div`
  width: calc(100% - 24px);
  padding: 16px;
  border-radius: ${({ theme }) => theme.radii.m};
  background-color: #363940;
`;
