import styled from 'styled-components';

export const FormContainer = styled.form`
  margin: 24px 0;
`;

export const FormInput = styled.input`
  color: inherit;
  width: 100%;
  padding: 16px 12px;
  border: 1px solid #43464a;
  border-radius: ${({ theme }) => theme.radii.xs};
  background-color: #111419;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }

  &:last-of-type {
    margin-bottom: 25px;
  }

  ::placeholder {
    color: #808184;
  }
`;
