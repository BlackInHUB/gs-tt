import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.dark.elements};
  border-radius: ${({ theme }) => theme.radii.l};
  cursor: pointer;
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
  top: calc(100% + 4px);
  left: 0;
  z-index: 10;
  max-height: ${props => (props.$isOpen ? '500px' : 0)};
  background-color: #2d3b40;
  border-radius: ${({ theme }) => theme.radii.xxs};
  overflow: hidden;
  transition: max-height 150ms ease-in-out;
`;

export const DropdownListItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  cursor: pointer;
  transition: hover 150ms linear;

  &:not(:last-child) {
    border-bottom: 1px solid #4e666e;
  }

  &:hover,
  :focus {
    background-color: #4e666e;
  }
`;
