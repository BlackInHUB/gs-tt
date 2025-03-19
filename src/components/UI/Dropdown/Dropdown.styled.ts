import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  padding: 8px;
  background-color: #141820;
  border-radius: ${({ theme }) => theme.radii.l};
  cursor: pointer;

  @media (min-width: 1280px) {
    padding: 12px;
  }
`;

export const SelectedWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (min-width: 1280px) {
    gap: 8px;
  }
`;

export const SelectedText = styled.span`
  text-transform: uppercase;
  color: #ffffff;
`;

export const DropdownList = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 10;
  max-height: ${props => (props.$isOpen ? '500px' : 0)};
  background-color: #2c4450;
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
    border-bottom: 1px solid #4e626c;
  }

  @media (min-width: 1280px) {
    padding: 12px;
    gap: 8px;
  }

  &:hover,
  :focus {
    background-color: #4e626c;
  }
`;
