import { BarContainer, RightWrapper } from './UserBar.styled';
import { ReactComponent as EnIcon } from '../../assets/icons/en.svg';
import { ReactComponent as UaIcon } from '../../assets/icons/ua.svg';
import { ReactComponent as CurIcon } from '../../assets/icons/currency.svg';
import Dropdown, { DropItemType } from '../UI/Dropdown/Dropdown';
import { useState } from 'react';
import Logo from '../Logo/Logo';

const currencies: DropItemType[] = [
  { Icon: CurIcon, text: 'usd' },
  { Icon: CurIcon, text: 'uah' },
  { Icon: CurIcon, text: 'eur' },
];

const languages: DropItemType[] = [
  { Icon: EnIcon, text: 'en' },
  { Icon: UaIcon, text: 'ua' },
];

const UserBar = () => {
  const [userCur, setUserCur] = useState<DropItemType>(currencies[0]);
  const [curOpen, setCurOpen] = useState(false);
  const [userLang, setUserLang] = useState<DropItemType>(languages[0]);
  const [langOpen, setLangOpen] = useState(false);

  const toggleDropOpen = (name?: string) => {
    return name === 'cur' ? setCurOpen(prev => !prev) : setLangOpen(prev => !prev);
  };

  return (
    <BarContainer>
      <Logo />
      <RightWrapper>
        <Dropdown
          onDropClick={() => toggleDropOpen('cur')}
          onItemClick={(i: number) => setUserCur(currencies[i])}
          items={currencies}
          isOpen={curOpen}
          selected={userCur}
          onClose={() => setCurOpen(false)}
        />
        <Dropdown
          onDropClick={() => toggleDropOpen()}
          onItemClick={(i: number) => setUserLang(languages[i])}
          items={languages}
          isOpen={langOpen}
          selected={userLang}
          onClose={() => setLangOpen(false)}
        />
      </RightWrapper>
    </BarContainer>
  );
};

export default UserBar;
