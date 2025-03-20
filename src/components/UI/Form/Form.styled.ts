import styled from 'styled-components';

export const FormContainer = styled.form``;

export const FormInput = styled.input`
  width: 100%;
  padding: 16px 12px;
  border: 1px solid #2e3135;
  border-radius: ${({ theme }) => theme.radii.xs};
  background-color: #111419;

  ::placeholder {
    color: #808184;
  }
`;
