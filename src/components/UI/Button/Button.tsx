import StyledIcon from '../StyledIcon/StyledIcon';
import { Btn } from './Button.styled';

type ButtonProps = {
  color?: 'dark' | 'light';
  variant?: 'text' | 'icon';
  radii?: 's' | 'm';
  type?: 'submit' | 'button';
  fontWeight?: 'regular' | 'bold';
  padding?: string;
  mb?: string;
  children?: React.ReactNode;
  Icon?: React.ElementType;
};

const Button = ({
  color = 'light',
  variant = 'text',
  radii = 'm',
  type = 'button',
  padding = '0',
  children,
  mb = '0',
  Icon,
  fontWeight = 'regular',
}: ButtonProps) => {
  return (
    <Btn
      $padding={padding}
      $mb={mb}
      $fontWeight={fontWeight}
      type={type}
      $color={color}
      $variant={variant}
      $radii={radii}
    >
      {Icon && <StyledIcon Icon={Icon} />}
      {children}
    </Btn>
  );
};

export default Button;
