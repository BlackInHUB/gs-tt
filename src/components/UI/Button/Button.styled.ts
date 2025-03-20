import styled from 'styled-components';

type Props = {
  $color: 'dark' | 'light';
  $variant: 'text' | 'icon';
  $radii: 's' | 'm';
  $fontWeight: 'regular' | 'bold';
  $padding: string;
  $mb: string;
};

export const Btn = styled.button<Props>`
  width: ${props => (props.$variant === 'icon' ? 'fit-content' : '100%')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.$padding};
  margin-bottom: ${props => props.$mb};
  background-color: ${props => (props.$variant === 'icon' ? 'transparent' : '#FFFFFF')};
  border-radius: ${props => (props.$radii === 'm' ? props.theme.radii.m : props.theme.radii.s)};
  color: ${props => (props.$color === 'light' ? '#000000' : 'FFFFFF')};
  font-weight: ${props =>
    props.$fontWeight === 'bold' ? props.theme.fontWeights.bold : props.theme.fontWeights.regular};
  cursor: pointer;
`;
