import styled from 'styled-components';

export const LayoutContainer = styled.div`
  color: ${({ theme }) => theme.colors.dark.fontLight};
  font-size: ${({ theme }) => theme.fontSizes.mobile.s};
`;

export const OutletContainer = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 0 12px;
`;
