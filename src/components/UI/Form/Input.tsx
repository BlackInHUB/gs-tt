import { ChangeEvent } from 'react';
import { FormInput } from './Form.styled';

export type InputType = {
  name: string;
  type: string;
  value: string | number;
  placeholder: string;
};

type InputProps = {
  name: string;
  type: string;
  value: string | number;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ name, type, value, placeholder, handleChange }: InputProps) => {
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
