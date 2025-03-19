import styled from 'styled-components';

type Props = {
  $width?: string;
  $height?: string;
  $fill?: string;
};

export const IconComponent = styled.svg<Props>`
  width: ${props => (props.$width ? props.$width : '20px')};
  height: ${props => (props.$height ? props.$height : '20px')};
  fill: ${props => (props.$fill ? props.$fill : '#FFFFFF')};
  stroke: ${props => (props.$fill ? props.$fill : 'inherit')};
  transition: all 150 linear;

  @media (min-width: 1280px) {
    width: ${props => (props.$width ? props.$width : '25px')};
    height: ${props => (props.$height ? props.$height : '25px')};
  }
`;
