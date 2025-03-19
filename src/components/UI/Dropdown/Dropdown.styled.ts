import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.dark.containers};
  border-radius: ${({ theme }) => theme.radii.l};
`;

export const SelectedWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const SelectedText = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.dark.fontLight};
`;

export const DropdownList = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  bottom: 4px;
  z-index: 10;
  height: ${props => (props.$isOpen ? 'auto' : 0)};
  transition: ${({ theme }) => theme.transition.all};
`;

export const DropdownListItem = styled.li`
  ${SelectedWrapper}
`;
