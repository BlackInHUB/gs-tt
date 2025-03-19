import { IconComponent } from './StyledIcon.styled';

type Props = {
  width?: string;
  height?: string;
  fill?: string;
  Icon: React.ElementType;
};

const StyledIcon = ({ width, height, fill, Icon }: Props) => {
  return <IconComponent as={Icon} $width={width} $height={height} $fill={fill} />;
};

export default StyledIcon;
