import { ChangeEvent } from 'react';
import { FormInput } from './Form.styled';

export type InputType = {
  name: string;
  type: string;
  value: string | number;
  placeholder: string;
};

type InputProps = {
  input: InputType;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ input, handleChange }: InputProps) => {
  const { name, type, value, placeholder } = input;

  return (
    <FormInput
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
