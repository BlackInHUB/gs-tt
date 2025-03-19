import styled from 'styled-components';
import theme from '../../../utils/theme';

type Props = {
  $width?: string;
  $height?: string;
  $fill?: string;
};

export const IconComponent = styled.svg<Props>`
  width: ${props => (props.$width ? props.$width : 'auto')};
  height: ${props => (props.$height ? props.$height : 'auto')};
  fill: ${props => (props.$fill ? props.$fill : theme.colors.dark.fontLight)};
  stroke: ${props => (props.$fill ? props.$fill : 'inherit')};
  transition: all 150 linear;
`;
