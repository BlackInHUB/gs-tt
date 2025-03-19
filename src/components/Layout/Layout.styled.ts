import styled from 'styled-components';

export const LayoutContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  font-family: ${({ theme }) => theme.fontFamily.main};
  background-color: #01060f;
  color: #ffffff;
  font-size: ${({ theme }) => theme.fontSizes.mobile.s};

  @media (min-width: 1280px) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.s};
  }
`;

export const OutletContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 12px;

  @media (min-width: 1280px) {
    padding: 16px;
  }
`;
