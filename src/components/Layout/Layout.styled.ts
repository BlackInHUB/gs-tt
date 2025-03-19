import styled from 'styled-components';

export const LayoutContainer = styled.div`
  color: ${({ theme }) => theme.colors.dark.fontLight};
  font-size: ${({ theme }) => theme.fontSizes.mobile.s};

  @media (min-width: 1280px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.s};
  }
`;

export const OutletContainer = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 12px;

  @media (min-width: 1280px) {
    padding: 16px;
  }
`;
