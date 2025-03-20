import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
`;

export const CheckboxInput = styled.input`
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 1px solid #ffffff;
  border-radius: 4px;

  &:checked::before {
    display: block;
    content: '';
    width: 15px;
    height: 15px;
    box-shadow: inset 1em 1em green;
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    /* transition: all 150ms linear; */
  }
`;

export const CheckboxLabel = styled.label`
  color: #808184;
`;
