import StyledIcon from '../StyledIcon/StyledIcon';
import {
  DropdownContainer,
  DropdownList,
  DropdownListItem,
  SelectedText,
  SelectedWrapper,
} from './Dropdown.styled';
import { useClickOutside } from '../../../hooks/useClickOutside';

export type DropItemType = { Icon: React.ElementType; text: string };

type Props = {
  items: DropItemType[];
  selected: DropItemType;
  isOpen: boolean;
  onDropClick: () => void;
  onItemClick: (i: number) => void;
  onClose: () => void;
};

const Dropdown = ({ items, selected, isOpen, onDropClick, onItemClick, onClose }: Props) => {
  const dropRef = useClickOutside<HTMLDivElement>(onClose);

  return (
    <DropdownContainer ref={dropRef} onClick={onDropClick}>
      <SelectedWrapper>
        <StyledIcon Icon={selected.Icon} />
        <SelectedText>{selected.text}</SelectedText>
        <DropdownList $isOpen={isOpen}>
          {items.map((item, i) => (
            <DropdownListItem key={i} onClick={() => onItemClick(i)}>
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
