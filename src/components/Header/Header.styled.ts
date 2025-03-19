import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.dark.containers};
  padding: 8px 12px;

  @media (min-width: 1280px) {
    padding: 12px 16px;
  }
`;
