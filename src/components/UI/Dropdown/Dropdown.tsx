import React from 'react';
import StyledIcon from '../StyledIcon/StyledIcon';
import {
  DropdownContainer,
  DropdownList,
  DropdownListItem,
  SelectedText,
  SelectedWrapper,
} from './Dropdown.styled';

type Props = {
  items: { Icon: React.ElementType; text: string }[];
  selected: { Icon: React.ElementType; text: string };
  dropOpen: boolean;
};

const Dropdown = ({ items, selected, dropOpen }: Props) => {
  return (
    <DropdownContainer>
      <SelectedWrapper>
        <StyledIcon Icon={selected.Icon} />
        <SelectedText>{selected.text}</SelectedText>
        <DropdownList $isOpen={dropOpen}>
          {items.map((item, i) => (
            <DropdownListItem key={i}>
              <StyledIcon Icon={item.Icon} />
              <SelectedText>{item.text}</SelectedText>
            </DropdownListItem>
          ))}
        </DropdownList>
      </SelectedWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
