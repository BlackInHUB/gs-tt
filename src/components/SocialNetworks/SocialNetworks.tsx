import {
  SocialBtnsList,
  SocialBtnsListItem,
  SocialContainer,
  SocialTitle,
} from './SocialNetworks.styled';
import { ReactComponent as GoogleIcon } from '../../assets/icons/google.svg';
import { ReactComponent as AppleIcon } from '../../assets/icons/apple.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg';
import { ReactComponent as DiscordIcon } from '../../assets/icons/discord.svg';
import { ReactComponent as TelegramIcon } from '../../assets/icons/telegram.svg';
import Button from '../UI/Button/Button';

type SocialBtnsType = {
  name: string;
  Icon: React.ElementType;
};

const socialBtns: SocialBtnsType[] = [
  { name: 'google', Icon: GoogleIcon },
  { name: 'apple', Icon: AppleIcon },
  { name: 'facebook', Icon: FacebookIcon },
  { name: 'discord', Icon: DiscordIcon },
  { name: 'telegram', Icon: TelegramIcon },
];

const SocialNetworks = () => {
  return (
    <SocialContainer>
      <SocialTitle>Use social networks</SocialTitle>
      <SocialBtnsList>
        {socialBtns.map(({ name, Icon }, i) => (
          <SocialBtnsListItem key={i}>
            <Button name={name} Icon={Icon} variant="icon" />
          </SocialBtnsListItem>
        ))}
      </SocialBtnsList>
    </SocialContainer>
  );
};

export default SocialNetworks;
